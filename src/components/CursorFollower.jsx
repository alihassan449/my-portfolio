import { useEffect, useState } from 'react'
import './CursorFollower.css'

function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div
      className="cursor-follower"
      style={{
        left: pos.x,
        top:  pos.y,
        opacity: visible ? 1 : 0
      }}
    />
  )
}

export default CursorFollower