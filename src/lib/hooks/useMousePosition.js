import { useEffect, useState } from 'react'

export const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return position
}
