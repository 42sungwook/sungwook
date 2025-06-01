'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(1)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const total = images.length

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === total ? 1 : prevIndex + 1))
    }, 5000)

    return () => {
      resetTimeout()
    }
  }, [index, total])

  return (
    <div className="bg-black p-4 pb-12 rounded-md relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(index - 1) * 100}%)` }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full px-2"
          >
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-neutral-900">
              <Image
                src={image}
                alt={'project image'}
                fill
                sizes="90vw"
                className="rounded-md object-contain"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <nav className="absolute bg-black bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array(total)
          .fill(null)
          .map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i + 1
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setIndex(i + 1)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
      </nav>
    </div>
  )
}

export default ImageSlider
