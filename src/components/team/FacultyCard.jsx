import React from 'react'

export default function FacultyCard({ faculty, onOpen, className = '' }) {
  const data = faculty || {
    name: 'Abdul Majid Ansari',
    designation: 'Faculty Coordinator',
    photo: '/teams/image.png',
  }

  const handleOpen = () => {
    if (onOpen) {
      onOpen({
        m: {
          name: data.name,
          designation: data.designation,
          dept: data.designation,
          photo: data.photo || '/teams/image.png',
          intro: 'Faculty Coordinator for Google Developer Groups on Campus at AIKTC.',
        },
        color: '#ea4335',
        badge: 'Faculty Coordinator',
      })
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleOpen()
        }
      }}
      className={`group relative flex flex-col overflow-hidden bg-white border-2 border-neutral-200 hover:border-neutral-900 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 rounded-3xl p-3 sm:p-3.5 cursor-pointer text-center outline-none focus-visible:border-neutral-900 ${className}`}
    >
      {/* Designation Badge */}
      <div className="mb-2.5 flex justify-center">
        <span className="rounded-full px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-bold border border-neutral-900 bg-[#ea4335] text-white whitespace-nowrap shadow-xs">
          ★ Faculty Coordinator
        </span>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-2xl aspect-square bg-neutral-100 border border-neutral-100">
        <img
          src={data.photo || '/teams/image.png'}
          alt={data.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name and Designation */}
      <div className="pt-3 pb-1">
        <h3 className="font-extrabold text-neutral-900 leading-tight text-lg sm:text-xl tracking-tight">
          {data.name}
        </h3>
        <p className="text-neutral-500 font-semibold text-xs sm:text-sm mt-0.5">
          {data.designation}
        </p>
      </div>
    </div>
  )
}
