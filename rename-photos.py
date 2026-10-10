"""
Turn the photos downloaded from the Google Form's Drive folder into the files the site expects,
cropped so the FACE is centered.

Usage (from the repo root):
    pip install pillow "opencv-python<5"
    python rename-photos.py <folder-with-downloaded-photos>

For each photo it:
  1. reads the name after " - " in the file name and matches it to a member in public/data/teams.json
  2. finds the face and crops a 3:4 portrait around it (head + shoulders, with headroom)
  3. saves it as public/teams/<slug>.jpg (720x960), the path the JSON already points to

If no face is found it crops from the upper part of the picture and says so, so you can check that one by eye.
"""
import difflib, json, re, sys
from pathlib import Path
from PIL import Image, ImageOps
import cv2, numpy as np

repo = Path(__file__).resolve().parent
data = json.load(open(repo / "public/data/teams.json", encoding="utf-8"))
members = data["organizers"] + [m for t in data["teams"] for m in t["members"]]
key = lambda s: " ".join(sorted(re.sub(r"[^a-z ]", "", s.lower()).split()))
by_key = {key(m["name"]): m for m in members}

if not hasattr(cv2, "CascadeClassifier"):
    sys.exit("Your OpenCV is too new (version 5 removed face detection). Run:\n"
             "    pip uninstall -y opencv-python\n    pip install \"opencv-python<5\"\nthen run this script again.")

cascades = [cv2.CascadeClassifier(cv2.data.haarcascades + n) for n in
            ("haarcascade_frontalface_default.xml", "haarcascade_frontalface_alt2.xml", "haarcascade_profileface.xml")]

def find_face(img):
    """Return (cx, cy, size) of the biggest face, or None."""
    scale = 800 / max(img.size)
    small = img.resize((int(img.width * scale), int(img.height * scale))) if scale < 1 else img
    scale = small.width / img.width
    gray = cv2.equalizeHist(cv2.cvtColor(np.array(small), cv2.COLOR_RGB2GRAY))
    for c in cascades:
        faces = c.detectMultiScale(gray, 1.1, 5, minSize=(max(30, small.width // 14),) * 2)
        if len(faces):
            x, y, w, h = max(faces, key=lambda f: f[2] * f[3])
            return (x + w / 2) / scale, (y + h / 2) / scale, max(w, h) / scale
    return None

def crop_portrait(img, face):
    """3:4 portrait crop with the face near the upper-middle. If the crop reaches past the
    edge of a small photo, the edge is extended (so heads are never cut off)."""
    W, H = img.size
    if face:
        cx, cy, fs = face
        ch = min(fs * 4.4, H * 1.35, W * 1.6)  # head + shoulders, with room above the head
        cw = ch * 3 / 4
        x0, y0 = cx - cw / 2, cy - ch * 0.40
    else:
        ch = min(H, W * 4 / 3); cw = ch * 3 / 4
        x0, y0 = (W - cw) / 2, (H - ch) * 0.12
    left, top = max(0, -int(x0)), max(0, -int(y0))
    right, bottom = max(0, int(x0 + cw) - W), max(0, int(y0 + ch) - H)
    if left or top or right or bottom:
        arr = cv2.copyMakeBorder(np.array(img), top, bottom, left, right, cv2.BORDER_REPLICATE)
        img = Image.fromarray(arr)
        x0, y0 = x0 + left, y0 + top
    return img.crop((int(x0), int(y0), int(x0 + cw), int(y0 + ch)))

src = Path(sys.argv[1])
out = repo / "public/teams"
out.mkdir(parents=True, exist_ok=True)
done, unmatched, nofaces = set(), [], []

for f in sorted(src.iterdir()):
    if f.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    person = f.stem.rsplit(" - ", 1)[-1]
    hit = difflib.get_close_matches(key(person), by_key, n=1, cutoff=0.6)
    if not hit:
        unmatched.append(f.name)
        continue
    m = by_key[hit[0]]
    img = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    face = find_face(img)
    pic = crop_portrait(img, face)
    pic.thumbnail((720, 960))
    pic.save(repo / "public" / m["photo"].lstrip("/"), "JPEG", quality=88)
    done.add(m["name"])
    if not face:
        nofaces.append(m["name"])
    print(f"{'face' if face else 'NO FACE'}  {f.name}  ->  {m['photo']}")

print(f"\n{len(done)} photos saved.")
print("No face found (check these by eye):", nofaces or "none")
print("Unmatched files (rename by hand):", unmatched or "none")
print("Members still without a photo:", [m["name"] for m in members if m["name"] not in done] or "none")
