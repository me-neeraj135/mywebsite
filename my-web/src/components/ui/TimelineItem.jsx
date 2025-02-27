// components/ui/TimelineItem.jsx

import React from 'react'
const TimelineItem = ({ experience }) => {
  return (
    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{experience.position}</h3>
        <p className="text-gray-600 dark:text-gray-400">{experience.company}</p>
        <p className="text-sm text-gray-500">{experience.duration}</p>
      </div>
    </div>
  )
}
