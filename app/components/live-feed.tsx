import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LiveFeed() {
  const [showOverlay, setShowOverlay] = useState(true)

  return (
    <div className="holographic-panel p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold glow-text">Live Feed</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowOverlay(!showOverlay)}
          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
        >
          {showOverlay ? <Eye /> : <EyeOff />}
        </motion.button>
      </div>
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary glow-text">Live Feed Placeholder</span>
        </div>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-4 glassmorphism px-3 py-1 rounded-full"
          >
            <span className="text-green-400 glow-text">Status: Active</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

