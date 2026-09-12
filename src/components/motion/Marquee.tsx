import React from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: number // seconds per cycle
  separator?: string
  className?: string
  pauseOnHover?: boolean
}

export function Marquee({
  items,
  direction = 'left',
  speed = 30,
  separator = '•',
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  // Renderiza sequencia duplicada para loop infinito perfeito
  const content = (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-6 sm:gap-8 mx-3 sm:mx-4 shrink-0 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A3A3A3]"
        >
          <span className="text-[#FFFFFF] font-bold">{item}</span>
          <span className="text-[#404040] select-none">{separator}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={cn(
        'relative overflow-hidden w-full border-y border-[#262626] bg-[#0A0A0A] py-3.5 select-none',
        pauseOnHover && 'hover:[&_.marquee-track]:[animation-play-state:paused]',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-max marquee-track',
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right',
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  )
}
