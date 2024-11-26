import { Heart, Flame } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HealthMetrics() {
  return (
    <div className="holographic-panel p-4">
      <h2 className="text-xl font-bold mb-4 glow-text">Health Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          className="flex items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="text-red-500 mr-2" />
          <div>
            <div className="text-sm text-gray-400">Heart Rate</div>
            <motion.div
              className="text-2xl font-bold glow-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              72 BPM
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Flame className="text-orange-500 mr-2" />
          <div>
            <div className="text-sm text-gray-400">Calories Burned</div>
            <motion.div
              className="text-2xl font-bold glow-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              1,250 kcal
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

