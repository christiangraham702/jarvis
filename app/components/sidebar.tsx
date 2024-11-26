import { Home, Activity, Heart, DollarSign, Settings } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Activity, label: 'Activity', href: '/activity' },
  { icon: Heart, label: 'Health', href: '/health' },
  { icon: DollarSign, label: 'Financials', href: '/financials' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-16 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="h-full flex flex-col items-center py-4 space-y-8">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <item.icon className="w-8 h-8 text-primary glow" />
              <span className="absolute left-full ml-4 px-2 py-1 bg-primary text-primary-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </motion.div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

