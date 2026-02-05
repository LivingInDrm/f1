import { motion } from 'framer-motion'
import { MapPin, Wrench, Trophy, Users } from 'lucide-react'
import type { Team } from '../types/racing'

interface TeamCardProps {
  team: Team
  index: number
}

export function TeamCard({ team, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${team.colors.primary}20, transparent 70%)`,
        }}
      />

      <div className="relative bg-racing-gray/30 border border-white/5 group-hover:border-white/10 transition-all duration-300 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 transition-all duration-300 group-hover:w-20 group-hover:h-20"
          style={{ borderColor: team.colors.primary + '60' }}
        />
        <div
          className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 transition-all duration-300 group-hover:w-20 group-hover:h-20"
          style={{ borderColor: team.colors.primary + '60' }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${team.colors.primary}, ${team.colors.secondary})`,
          }}
        />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div
              className="w-12 h-12 rounded flex items-center justify-center text-xl font-bold"
              style={{
                backgroundColor: team.colors.primary + '20',
                color: team.colors.primary,
              }}
            >
              {team.name.charAt(0)}
            </div>
            <span className="font-mono text-xs tracking-wider text-chrome/30">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="font-display text-3xl mb-1" style={{ color: team.colors.primary }}>
            {team.name.toUpperCase()}
          </h3>
          <p className="text-chrome/40 text-xs font-mono tracking-wider mb-6">
            {team.fullName}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Users className="w-4 h-4 text-chrome/40" />
              <span className="text-chrome/60">{team.principal}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Wrench className="w-4 h-4 text-chrome/40" />
              <span className="text-chrome/60">{team.engine}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-chrome/40" />
              <span className="text-chrome/60">{team.headquarters}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" style={{ color: team.colors.primary }} />
              <div>
                <span className="font-mono text-2xl font-bold text-chrome-light">
                  {team.championships}
                </span>
                <span className="text-chrome/40 text-xs ml-1">TITLES</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-chrome-light">
                {team.raceWins}
              </span>
              <span className="text-chrome/40 text-xs ml-1">WINS</span>
            </div>
          </div>

          <div className="space-y-2">
            {team.achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-chrome/50"
              >
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: team.colors.primary }}
                />
                {achievement}
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${team.colors.primary}05, transparent 50%)`,
          }}
        />
      </div>
    </motion.div>
  )
}
