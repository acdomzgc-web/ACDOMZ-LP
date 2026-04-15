import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Code2, Layout } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl aspect-video md:aspect-[16/7] select-none group',
        className,
      )}
    >
      {/* After Image (Background) */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold z-10 shadow-sm flex items-center gap-2">
        <Layout className="w-3 h-3" /> {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />
      <div
        className="absolute top-4 left-4 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-semibold z-10 shadow-sm flex items-center gap-2"
        style={{ opacity: position > 15 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        <Code2 className="w-3 h-3" /> {beforeLabel}
      </div>

      {/* Range Input for Control */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
        aria-label="Controle de Antes e Depois"
      />

      {/* Visual Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5 text-primary">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
