import { Cpu, HardDrive, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SystemInfo() {
  return (
    <div className="holographic-panel p-4">
      <h2 className="text-xl font-bold mb-4 glow-text">System Info</h2>
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="flex items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Cpu className="text-blue-500 mr-2" />
          <div>
            <div className="text-sm text-gray-400">CPU Usage</div>
            <motion.div
              className="text-lg font-bold glow-text"
              initial={{ width: 0 }}
              animate={{ width: '45%' }}
              transition={{ duration: 1 }}
            >
              45%
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <HardDrive className="text-purple-500 mr-2" />
          <div>
            <div className="text-sm text-gray-400">Disk Space</div>
            <motion.div
              className="text-lg font-bold glow-text"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              250GB / 500GB
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Clock className="text-green-500 mr-2" />
          <div>
            <div className="text-sm text-gray-400">Uptime</div>
            <motion.div
              className="text-lg font-bold glow-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              5d 12h 34m
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

