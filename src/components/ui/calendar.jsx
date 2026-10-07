import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Calendar({
  mode = "single",
  selected: initialSelected,
  onSelect,
  className,
  ...props
}) {
  const [selectedDate, setSelectedDate] = useState(
    initialSelected instanceof Date ? initialSelected : new Date(2026, 4, 14)
  );
  const [currentMonth, setCurrentMonth] = useState(
    initialSelected instanceof Date
      ? new Date(initialSelected.getFullYear(), initialSelected.getMonth(), 1)
      : new Date(2026, 4, 1)
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const days = [];

  // Previous month trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, prevMonthDays - i),
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      day: d,
      isCurrentMonth: true,
      date: new Date(year, month, d),
    });
  }

  // Next month leading days (fill to 35 or 42)
  const totalCells = days.length > 35 ? 42 : 35;
  const remaining = totalCells - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push({
      day: d,
      isCurrentMonth: false,
      date: new Date(year, month + 1, d),
    });
  }

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDayClick = (dObj) => {
    setSelectedDate(dObj.date);
    if (onSelect) {
      onSelect(dObj.date);
    }
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Specially highlighted available VIP appointment days
  const hasConsultationSlot = (dayNum, isCurr) => {
    return isCurr && [7, 11, 14, 19, 23, 28].includes(dayNum);
  };

  return (
    <div
      className={cn(
        "luxury-calendar-card select-none rounded-2xl p-4 bg-[#0d1014]/90 backdrop-blur-xl border border-white/10 shadow-2xl text-white",
        className
      )}
      style={{ width: "290px" }}
      {...props}
    >
      {/* Month Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
        <button
          type="button"
          onClick={handlePrev}
          className="p-1 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Previous month"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-semibold tracking-wider uppercase text-[#f5dfa2]">
          {monthNames[month]} {year}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="p-1 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Next month"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {dayNames.map((name) => (
          <span
            key={name}
            className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((item, idx) => {
          const selected = isSelected(item.date);
          const hasSlot = hasConsultationSlot(item.day, item.isCurrentMonth);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleDayClick(item)}
              className={cn(
                "relative h-8 w-8 mx-auto flex flex-col items-center justify-center rounded-lg text-xs transition-all duration-200 cursor-pointer",
                !item.isCurrentMonth && "text-neutral-600 opacity-40",
                item.isCurrentMonth && !selected && "text-neutral-200 hover:bg-white/10 hover:text-white",
                selected &&
                  "bg-gradient-to-br from-[#f5dfa2] via-[#d4af37] to-[#a18128] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105"
              )}
            >
              <span>{item.day}</span>
              {hasSlot && !selected && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#d4af37]" />
              )}
            </button>
          );
        })}
      </div>

      {/* VIP Availability Indicator */}
      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          VIP Consultation Available
        </span>
        <span className="text-[#f5dfa2]/70 font-mono">10:00 - 18:30</span>
      </div>
    </div>
  );
}

export default Calendar;
