import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Radio } from 'lucide-react';
import { formatDayBarLabel } from '../utils/footballUtils';

interface LiveScoreTopBarProps {
  currentTab: 'schedule' | 'results' | 'live' | 'favorites';
  onTabChange: (tab: 'schedule' | 'results' | 'live' | 'favorites') => void;
  selectedDate: string;
  onSelectDate: (date: string) => void;
  todayDate: string;
  yesterdayDate: string;
  tomorrowDate: string;
  dateList: string[];
  liveCount: number;
}

export const LiveScoreTopBar: React.FC<LiveScoreTopBarProps> = ({
  currentTab,
  onTabChange,
  selectedDate,
  onSelectDate,
  todayDate,
  yesterdayDate,
  tomorrowDate,
  dateList,
  liveCount
}) => {
  const curIdx = dateList.indexOf(selectedDate);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeDateRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll active date into view on mobile/tablet
  useEffect(() => {
    if (activeDateRef.current && scrollContainerRef.current) {
      activeDateRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [selectedDate]);

  const prevDate = () => {
    if (curIdx > 0) onSelectDate(dateList[curIdx - 1]);
  };

  const nextDate = () => {
    if (curIdx < dateList.length - 1) onSelectDate(dateList[curIdx + 1]);
  };

  return (
    <div className="mb-3 sm:mb-4">
      {/* Main Bar with LIVE button and Spacious Horizontal Date System (Light Theme) */}
      <div className="bg-white border border-gray-200 rounded-xl p-1.5 sm:p-2.5 flex items-center justify-between gap-1.5 sm:gap-2 shadow-xs">
        
        {/* Left: LIVE pill button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => onTabChange(currentTab === 'live' ? 'schedule' : 'live')}
            className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition ${
              currentTab === 'live'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200'
            }`}
            title="Xem các trận đang đá trực tiếp"
          >
            <span className={`w-2 h-2 rounded-full ${currentTab === 'live' ? 'bg-white' : 'bg-red-600'} animate-pulse`}></span>
            <span>LIVE</span>
            {liveCount > 0 && (
              <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                currentTab === 'live' ? 'bg-red-800 text-white' : 'bg-red-200 text-red-800'
              }`}>
                {liveCount}
              </span>
            )}
          </button>
        </div>

        {/* Center: Expanded Horizontal Date Carousel */}
        <div className="flex-1 flex items-center min-w-0 px-0.5 sm:px-1 gap-0.5 sm:gap-1">
          {/* Previous Day Arrow */}
          <button
            onClick={prevDate}
            disabled={curIdx <= 0}
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-30 disabled:hover:bg-gray-100 border border-gray-200 transition"
            title="Ngày trước"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Scrollable list of date cards */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-0.5 px-0.5 scroll-smooth"
          >
            {dateList.map((dateStr) => {
              const isSelected = selectedDate === dateStr && currentTab !== 'live';
              const { title, subtitle, isToday } = formatDayBarLabel(
                dateStr,
                todayDate,
                yesterdayDate,
                tomorrowDate
              );

              return (
                <button
                  key={dateStr}
                  ref={isSelected ? activeDateRef : null}
                  onClick={() => {
                    onSelectDate(dateStr);
                    if (currentTab === 'live') {
                      onTabChange('schedule');
                    }
                  }}
                  className={`flex-shrink-0 flex flex-col items-center justify-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg transition text-center min-w-[64px] sm:min-w-[80px] relative ${
                    isSelected
                      ? 'bg-[#9f224e] text-white shadow-xs font-bold scale-[1.02]'
                      : isToday
                      ? 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-950 border border-gray-200'
                  }`}
                >
                  {/* Today dot indicator */}
                  {isToday && !isSelected && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  )}
                  <span className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-tight leading-none ${
                    isSelected ? 'text-rose-100' : isToday ? 'text-amber-700 font-bold' : 'text-gray-500'
                  }`}>
                    {title}
                  </span>
                  <span className={`text-[11px] sm:text-sm font-bold mt-0.5 font-mono ${
                    isSelected ? 'text-white' : 'text-gray-900'
                  }`}>
                    {subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Day Arrow */}
          <button
            onClick={nextDate}
            disabled={curIdx >= dateList.length - 1}
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-30 disabled:hover:bg-gray-100 border border-gray-200 transition"
            title="Ngày sau"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Right: Calendar picker button */}
        <div className="flex-shrink-0 pl-1 border-l border-gray-200">
          <label 
            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 cursor-pointer transition flex items-center justify-center" 
            title="Chọn ngày cụ thể"
          >
            <CalendarIcon className="w-4 h-4 text-[#9f224e]" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                if (e.target.value) {
                  onSelectDate(e.target.value);
                  if (currentTab === 'live') {
                    onTabChange('schedule');
                  }
                }
              }}
              className="sr-only"
            />
          </label>
        </div>

      </div>
    </div>
  );
};
