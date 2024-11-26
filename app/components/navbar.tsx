import { useState, useEffect } from 'react'
import { Sun, Cloud, ToggleLeft, Music } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weather, setWeather] = useState({ temp: 72, condition: 'Sunny' })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <motion.span
          className="text-2xl font-bold glow-text"
          key={currentTime.toLocaleTimeString()}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentTime.toLocaleTimeString()}
        </motion.span>
        <span className="text-lg text-primary">{currentTime.toLocaleDateString()}</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center glassmorphism px-3 py-1 rounded-full">
          <Cloud className="mr-2 text-primary" />
          <span>{weather.temp}°F</span>
          <span className="ml-2">{weather.condition}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
        >
          <ToggleLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
        >
          <Music />
        </motion.button>
      </div>
    </nav>
  )
}

