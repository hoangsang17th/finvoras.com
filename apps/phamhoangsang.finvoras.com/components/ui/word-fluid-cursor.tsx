import { useEffect, useRef } from 'react'

interface Props {
  words: string[]
  className?: string
}

export const WordFluidCursor = ({ words, className = '' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const container = containerRef.current
    const elements: HTMLSpanElement[] = []
    const mouse = { x: 0, y: 0 }
    const lastMouse = { x: 0, y: 0 }
    const velocity = { x: 0, y: 0 }

    // Create spans for each word
    words.forEach((word) => {
      const span = document.createElement('span')
      span.textContent = word
      container.appendChild(span)
      elements.push(span)

      // Random initial positions
      span.style.position = 'absolute'
      span.style.left = `${rand(0, container.offsetWidth)}px`
      span.style.top = `${rand(0, container.offsetHeight)}px`
    })

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      // Update velocity
      velocity.x = mouse.x - lastMouse.x
      velocity.y = mouse.y - lastMouse.y

      // Update last mouse position
      lastMouse.x = mouse.x
      lastMouse.y = mouse.y

      // Move elements
      elements.forEach((element, i) => {
        const rect = element.getBoundingClientRect()
        let x = parseFloat(element.style.left)
        let y = parseFloat(element.style.top)

        // Calculate target position with slight offset based on index
        const targetX = mouse.x - rect.width / 2 + (i - elements.length / 2) * 20
        const targetY = mouse.y - rect.height / 2

        // Add velocity influence
        x += (targetX - x) * 0.1 + velocity.x * 0.2
        y += (targetY - y) * 0.1 + velocity.y * 0.2

        // Keep elements within container bounds
        x = Math.max(0, Math.min(container.offsetWidth - rect.width, x))
        y = Math.max(0, Math.min(container.offsetHeight - rect.height, y))

        element.style.left = `${x}px`
        element.style.top = `${y}px`
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    container.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      elements.forEach((element) => element.remove())
    }
  }, [words])

  return (
    <div
      ref={containerRef}
      className={`relative h-[400px] w-full overflow-hidden ${className}`}
    />
  )
}