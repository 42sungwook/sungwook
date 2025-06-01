'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

function DarkLightToggleButton({ isDark }: { isDark: boolean }) {
  const [mode, setMode] = useState(isDark)

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.cookie = `mode=${mode}; path=/; max-age=${
      30 * 24 * 60 * 60
    }; SameSite=Lax`
  }, [mode])

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <button onClick={toggleMode}>
      {mode ? (
        <Image
          src="/sun.svg"
          alt="light"
          width={30}
          height={30}
        />
      ) : (
        <Image
          src="/moon.svg"
          alt="dark"
          width={30}
          height={30}
        />
      )}
    </button>
  )
}

export default DarkLightToggleButton
