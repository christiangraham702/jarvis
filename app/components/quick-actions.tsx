import { Lightbulb, Music, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function QuickActions() {
  const actions = [
    { icon: Lightbulb, label: 'Lights', color: 'text-yellow-500' },
    { icon: Music, label: 'Music', color: 'text-purple-500' },
    { icon: MessageSquare, label: 'Ask AI', color: 'text-blue-500' },
  ]

  return (
    <div className="holographic-panel p-4">
      <h2 className="text-xl font-bold mb-4 glow-text">Quick Actions</h2>
      <div className="flex justify-around">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <action.icon className={`${action.color} mb-2 w-8 h-8`} />
            <span className="text-sm">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

