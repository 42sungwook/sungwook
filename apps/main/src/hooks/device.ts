import { useState, useEffect } from 'react'
import { BREAKPOINT } from '@/constants/responsive'

const getDevice = (width: number) => {
  if (width >= BREAKPOINT.TABLET) return 'desktop'
  if (width >= BREAKPOINT.MOBILE) return 'tablet'
  return 'mobile'
}

export const useDevice = ({ initialDevice }: { initialDevice: string }) => {
  const [device, setDevice] = useState(initialDevice)

  useEffect(() => {
    const updateDevice = () => {
      setDevice(getDevice(window.innerWidth))
    }

    updateDevice()

    window.addEventListener('resize', updateDevice)

    return () => {
      window.removeEventListener('resize', updateDevice)
    }
  }, [])

  return device
}
