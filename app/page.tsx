"use client"

import DashboardLayout from './components/dashboard-layout'
import LiveFeed from './components/live-feed'
import ActivityTracker from './components/activity-tracker'
import HealthMetrics from './components/health-metrics'
import FinancialMetrics from './components/financial-metrics'
import SystemInfo from './components/system-info'
import QuickActions from './components/quick-actions'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-6 grid grid-cols-3 gap-6">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LiveFeed />
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ActivityTracker />
          <HealthMetrics />
        </motion.div>
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FinancialMetrics />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SystemInfo />
        </motion.div>
        <motion.div
          className="col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <QuickActions />
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

