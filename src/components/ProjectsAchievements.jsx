import React from 'react'
import { ArrowUpRight, Trophy, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'AI for Campus Solutions',
    description: 'Student-led prototypes that use AI to solve real campus pain points in learning, accessibility, and operations.',
    accent: 'bg-[#e8f0fe] text-[#1a73e8]',
  },
  {
    title: 'Build & Ship Sprint',
    description: 'Fast-moving product challenges where members go from concept to MVP in a single weekend with developer mentorship.',
    accent: 'bg-[#e6f4ea] text-[#188038]',
  },
  {
    title: 'Cloud Skills Bootcamp',
    description: 'Hands-on guided learning paths on Google Cloud, Firebase, and scalable product architecture for beginners and intermediates.',
    accent: 'bg-[#fef7e0] text-[#b06000]',
  },
  {
    title: 'Community Impact Lab',
    description: 'Open collaboration sessions for interns, developers, and designers to build social-impact solutions with local relevance.',
    accent: 'bg-[#fce8e6] text-[#d93025]',
  },
]

const achievements = [
  { value: '500+', label: 'Participants engaged' },
  { value: '25+', label: 'Student projects launched' },
  { value: '12', label: 'Technical events hosted' },
  { value: '90%', label: 'Member retention rate' },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-neutral-200 bg-neutral-50 p-5 sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fef7e0] text-[#b06000]">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Achievements</p>
            <h4 className="text-2xl font-black tracking-tight text-neutral-900">Momentum that keeps growing</h4>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-3xl font-black tracking-tight text-neutral-900">{item.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProjectsAchievements() {
  return (
    <section id="projects" className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Projects & impact</p>
            <h3 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
              Turning learning into measurable outcomes
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-600 shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-[#1a73e8]" />
            Built by students, for the community
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <div className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${project.accent}`}>
                Initiative
              </div>
              <h4 className="mt-4 text-xl font-bold text-neutral-900">{project.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                View story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
