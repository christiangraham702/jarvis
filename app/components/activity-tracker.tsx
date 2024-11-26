import { Circle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ActivityTracker() {
  const activities = [
    { label: 'Sitting', time: '4h 30m', color: 'bg-red-500' },
    { label: 'Standing', time: '2h 15m', color: 'bg-green-500' },
    { label: 'Away', time: '1h 45m', color: 'bg-yellow-500' },
  ]

  return (
    <div className="holographic-panel p-4">
      <h2 className="text-xl font-bold mb-4 glow-text">Activity Tracker</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <Circle className={`mr-2 ${activity.color}`} size={12} />
              <span>{activity.label}</span>
            </div>
            <span>{activity.time}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 bg-gray-700 h-2 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-primary h-full"
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}

