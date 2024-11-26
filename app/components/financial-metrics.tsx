import { DollarSign, TrendingUp, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FinancialMetrics() {
  return (
    <div className="holographic-panel p-4">
      <h2 className="text-xl font-bold mb-4 glow-text">Financial Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="flex flex-col items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <DollarSign className="text-green-500 mb-2" />
          <div className="text-sm text-gray-400">Daily Spending</div>
          <motion.div
            className="text-xl font-bold glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            $125.50
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
>
          <CreditCard className="text-blue-500 mb-2" />
          <div className="text-sm text-gray-400">Bank Balance</div>
          <motion.div
            className="text-xl font-bold glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            $12,450.75
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center glassmorphism p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="text-purple-500 mb-2" />
          <div className="text-sm text-gray-400">Monthly Projection</div>
          <motion.div
            className="text-xl font-bold glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            +$2,300
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

