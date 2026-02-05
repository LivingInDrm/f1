import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Flag, Gauge } from 'lucide-react'
import type { Driver, Team } from '../types/racing'

interface DriverCardProps {
  driver: Driver
  team: Team
  index: number
}

export function DriverCard({ driver, team, index }: DriverCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative h-[360px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full bg-racing-gray/30 border border-white/5 overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${team.colors.primary}, ${team.colors.secondary})`,
              }}
            />

            <div className="absolute top-4 right-4 z-10">
              <div
                className="font-display text-5xl font-bold opacity-90"
                style={{ color: team.colors.primary }}
              >
                {driver.number}
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <span
                className="font-display text-[200px] font-bold"
                style={{ color: team.colors.primary }}
              >
                {driver.number}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-racing-black via-racing-black/90 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-chrome/50 uppercase tracking-wider">
                  {driver.countryCode}
                </span>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: team.colors.primary }}
                />
                <span
                  className="text-xs font-mono uppercase tracking-wider"
                  style={{ color: team.colors.primary }}
                >
                  {team.name}
                </span>
              </div>

              <h3 className="font-display text-xl text-chrome/60 leading-none">
                {driver.firstName.toUpperCase()}
              </h3>
              <h3 className="font-display text-3xl text-chrome-light leading-none">
                {driver.lastName.toUpperCase()}
              </h3>

              {driver.championships > 0 && (
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(driver.championships)].map((_, i) => (
                    <Trophy
                      key={i}
                      className="w-4 h-4"
                      style={{ color: team.colors.primary }}
                    />
                  ))}
                  <span className="text-xs text-chrome/50 ml-1">WDC</span>
                </div>
              )}
            </div>

            <div
              className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2"
              style={{ borderColor: team.colors.primary + '40' }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2"
              style={{ borderColor: team.colors.primary + '40' }}
            />
          </div>
        </div>

        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div
            className="relative h-full border border-white/10 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${team.colors.primary}15, ${team.colors.secondary}10, rgba(26,26,31,0.95))`,
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${team.colors.secondary}, ${team.colors.primary})`,
              }}
            />

            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl" style={{ color: team.colors.primary }}>
                    {driver.lastName.toUpperCase()}
                  </h3>
                  <p className="text-xs text-chrome/50 font-mono">#{driver.number}</p>
                </div>
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ backgroundColor: team.colors.primary + '20' }}
                >
                  <Flag className="w-5 h-5" style={{ color: team.colors.primary }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-racing-black/50 p-3 rounded">
                  <div className="font-mono text-2xl font-bold text-chrome-light">
                    {driver.wins}
                  </div>
                  <div className="text-xs text-chrome/40">WINS</div>
                </div>
                <div className="bg-racing-black/50 p-3 rounded">
                  <div className="font-mono text-2xl font-bold text-chrome-light">
                    {driver.podiums}
                  </div>
                  <div className="text-xs text-chrome/40">PODIUMS</div>
                </div>
                <div className="bg-racing-black/50 p-3 rounded">
                  <div className="font-mono text-2xl font-bold text-chrome-light">
                    {driver.polePositions}
                  </div>
                  <div className="text-xs text-chrome/40">POLES</div>
                </div>
                <div className="bg-racing-black/50 p-3 rounded">
                  <div className="font-mono text-2xl font-bold text-chrome-light">
                    {driver.championships}
                  </div>
                  <div className="text-xs text-chrome/40">TITLES</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4" style={{ color: team.colors.primary }} />
                  <span className="text-xs text-chrome/50 uppercase tracking-wider">
                    Driving Style
                  </span>
                </div>
                <p className="text-xs text-chrome/60 leading-relaxed">
                  {driver.drivingStyle}
                </p>
              </div>

              <div className="space-y-1 mt-4">
                {driver.highlights.slice(0, 2).map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-chrome/50"
                  >
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: team.colors.primary }}
                    />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
