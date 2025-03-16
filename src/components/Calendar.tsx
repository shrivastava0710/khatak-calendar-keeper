
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isPast, isFuture, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ClassSchedule } from '@/utils/calendarData';

interface CalendarProps {
  schedules: ClassSchedule[];
  compact?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({ schedules, compact = false }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');

  const previousMonth = () => {
    setAnimationDirection('left');
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  const nextMonth = () => {
    setAnimationDirection('right');
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };

  const today = new Date();
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the day of the week of the first day (0 = Sunday, 6 = Saturday)
  const startDay = monthStart.getDay();
  
  // Create an array for the blank days at the start
  const blankDaysAtStart = Array(startDay).fill(null);
  
  // Calculate days needed to complete the last week
  const endDay = monthEnd.getDay();
  const blankDaysAtEnd = Array(6 - endDay).fill(null);

  // Combine blank days and month days
  const calendarDays = [...blankDaysAtStart, ...monthDays, ...blankDaysAtEnd];

  // Group days into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  const getClassesForDate = (date: Date) => {
    return schedules.filter(schedule => 
      isSameDay(new Date(schedule.date), date)
    );
  };

  const hasClasses = (date: Date) => {
    return getClassesForDate(date).length > 0;
  };

  // Get classes for selected date
  const selectedDateClasses = selectedDate ? getClassesForDate(selectedDate) : [];

  // Animation variants
  const calendarVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("bg-background rounded-lg shadow-md overflow-hidden", compact ? "p-4" : "p-6")}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={cn("font-serif", compact ? "text-xl" : "text-2xl")}>
          Class Schedule
        </h2>
        <div className="flex items-center space-x-1">
          <button 
            onClick={previousMonth}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium px-2">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={animationDirection} mode="sync">
          <motion.div
            key={format(currentMonth, 'M-yyyy')}
            custom={animationDirection}
            variants={calendarVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                <div key={i} className="text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, idx) => {
                if (!day) {
                  return <div key={`empty-${idx}`} className="h-12 md:h-14" />;
                }
                
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
                const classes = hasClasses(day);
                
                return (
                  <button
                    key={day.toString()}
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "calendar-day h-12 md:h-14 flex flex-col items-center justify-center relative",
                      !isCurrentMonth && "opacity-30",
                      isSelected && "bg-khatak-gold bg-opacity-20 font-bold",
                      classes && "has-class",
                      isToday(day) && "border border-khatak-gold"
                    )}
                    disabled={!isCurrentMonth || (compact && isPast(day) && !isToday(day))}
                  >
                    <span className={cn(
                      "text-sm md:text-base",
                      isSelected && "text-khatak-gold"
                    )}>
                      {format(day, 'd')}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {!compact && selectedDate && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-serif font-medium">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </h3>
            {isPast(selectedDate) && !isToday(selectedDate) && (
              <span className="text-sm px-2 py-1 bg-muted text-muted-foreground rounded">Past</span>
            )}
            {isToday(selectedDate) && (
              <span className="text-sm px-2 py-1 bg-khatak-gold/20 text-khatak-gold rounded">Today</span>
            )}
            {isFuture(selectedDate) && (
              <span className="text-sm px-2 py-1 bg-khatak-sage/20 text-khatak-charcoal rounded">Upcoming</span>
            )}
          </div>
          
          {selectedDateClasses.length > 0 ? (
            <div className="space-y-3">
              {selectedDateClasses.map((classItem, idx) => (
                <div 
                  key={idx}
                  className="bg-secondary rounded-lg p-4 flex justify-between items-center hover-lift"
                >
                  <div>
                    <h4 className="font-medium text-lg">{classItem.title}</h4>
                    <p className="text-muted-foreground">{classItem.instructor}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{classItem.time}</p>
                    <p className="text-sm text-muted-foreground">{classItem.level}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground">No classes scheduled for this day</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
