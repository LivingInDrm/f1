import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { teams, drivers, getTeamById } from '../data/teamsDriversData'
import { TeamCard } from './TeamCard'
import { DriverCard } from './DriverCard'

type TabType = 'teams' | 'drivers'

export function TeamsDrivers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<TabType>('teams')

  return (
    <section id="teams-drivers" className="py-32 md:py-40 relative overflow-hidden bg-racing-dark">
      <div className="absolute inset-0 diagonal-stripe" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent" />

      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-f1-red/5 blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-f1-red"
            />
            <span className="font-mono text-xs tracking-[0.3em] text-chrome/50">
              03 / TEAMS & DRIVERS
            </span>
          </div>

          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            <motion.span
              className="block text-chrome-light"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              THE 2025
            </motion.span>
            <motion.span
              className="block text-gradient-racing"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              GRID
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-chrome/60 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Meet the <span className="text-f1-red">10 teams</span> and{' '}
            <span className="text-neon-cyan">20 drivers</span> competing for glory at the
            Shanghai International Circuit.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative inline-flex bg-racing-gray/30 border border-white/5 p-1">
            <motion.div
              className="absolute top-1 bottom-1 bg-f1-red/20 border border-f1-red/40"
              initial={false}
              animate={{
                left: activeTab === 'teams' ? '4px' : '50%',
                width: 'calc(50% - 8px)',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            {(['teams', 'drivers'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-8 py-3 font-display text-lg tracking-wider transition-colors duration-300 ${
                  activeTab === tab ? 'text-white' : 'text-chrome/50 hover:text-chrome'
                }`}
              >
                {tab === 'teams' ? 'TEAMS' : 'DRIVERS'}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'teams' ? (
            <motion.div
              key="teams"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {teams.map((team, index) => (
                <TeamCard key={team.id} team={team} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="drivers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {drivers.map((driver, index) => {
                const team = getTeamById(driver.teamId)
                if (!team) return null
                return (
                  <DriverCard
                    key={driver.id}
                    driver={driver}
                    team={team}
                    index={index}
                  />
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-f1-red/20 via-transparent to-f1-red/20" />
            <div className="relative bg-racing-black/80 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-f1-red" />
                <h3 className="font-display text-2xl md:text-3xl text-chrome-light tracking-wide">
                  2025 SEASON HIGHLIGHTS
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '10', label: 'TEAMS' },
                  { value: '20', label: 'DRIVERS' },
                  { value: '24', label: 'RACES' },
                  { value: '5', label: 'ROOKIES' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-mono text-4xl md:text-5xl font-bold text-f1-red mb-2">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-chrome/50 tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
