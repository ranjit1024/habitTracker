// CustomCalendar.tsx
import React, { useState } from 'react'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths
} from 'date-fns'

export default function CustomCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const renderHeader = () => (
    <div className="flex justify-between  items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>←</button>
      <h2 className="text-lg font-bold">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>→</button>
    </div>
  )

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div className="grid grid-cols-7 text-center font-semibold text-gray-500 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const isCurrentMonth = isSameMonth(day, monthStart)
        const isSelected = isSameDay(day, selectedDate)

        days.push(
          <div
            key={day.toString()}
            className={`text-center w-[3rem] p-2 border rounded-4xl border-gray-300 cursor-pointer ${
              !isCurrentMonth ? 'text-gray-300' : ''
            } ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, 'd')}
          </div>
        )
        day = addDays(day, 1)
      }

      rows.push(<div className="grid grid-cols-7 gap-1 mb-1" key={day.toString()}>{days}</div>)
      days = []
    }

    return <div>{rows}</div>
  }

  return (
    <div className=" mx-auto mt-6 p-8 bg-white w-full  rounded-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}
