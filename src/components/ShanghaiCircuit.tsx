import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const circuitStats = [
  { label: 'LENGTH', value: '5.451', unit: 'KM' },
  { label: 'TURNS', value: '16', unit: '' },
  { label: 'LAP RECORD', value: '1:32.238', unit: '' },
  { label: 'DRS ZONES', value: '2', unit: '' },
]

const corners = [
  { id: 1, name: 'TURNS 1-2-3', subtitle: 'THE SNAIL', description: 'Iconic tightening spiral. High-speed entry into decreasing radius.', x: 28, y: 22 },
  { id: 2, name: 'TURN 6', subtitle: 'HAIRPIN', description: 'Key overtaking opportunity. Heavy braking zone.', x: 72, y: 38 },
  { id: 3, name: 'TURN 11', subtitle: 'CHICANE', description: 'Technical complex. Tests car balance and driver precision.', x: 58, y: 72 },
  { id: 4, name: 'TURN 14', subtitle: 'BACK STRAIGHT', description: 'Long straight entry. DRS activation zone ahead.', x: 22, y: 58 },
]

export function ShanghaiCircuit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCorner, setActiveCorner] = useState<number | null>(null)

  const activeCornerData = activeCorner ? corners.find(c => c.id === activeCorner) : null

  return (
    <section id="circuit" className="pt-32 pb-32 md:pt-48 md:pb-40 relative overflow-hidden bg-racing-dark">
      <div className="absolute inset-0 carbon-pattern opacity-20" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-neon-cyan"
            />
            <span className="font-mono text-xs tracking-[0.3em] text-chrome/50">02 / CIRCUIT</span>
          </div>
          
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            <motion.span 
              className="block text-chrome-light"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SHANGHAI
            </motion.span>
            <motion.span 
              className="block"
              style={{ color: '#00fff0' }}
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              INTERNATIONAL
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 border border-white/5" />
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/5" />
              
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-neon-cyan/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-neon-cyan/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-neon-cyan/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-neon-cyan/50" />

              <svg
                viewBox="0 0 100 100"
                className="w-full h-full p-8"
                fill="none"
              >
                <motion.path
                  d="M 50 12 
                     C 28 12, 18 24, 18 34 
                     C 18 44, 26 48, 30 52 
                     C 34 56, 26 66, 26 72 
                     C 26 82, 38 88, 50 88 
                     C 62 88, 74 82, 74 72 
                     C 74 64, 66 58, 70 48 
                     C 74 38, 82 34, 82 24 
                     C 82 14, 68 12, 50 12"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                
                <motion.path
                  d="M 50 12 
                     C 28 12, 18 24, 18 34 
                     C 18 44, 26 48, 30 52 
                     C 34 56, 26 66, 26 72 
                     C 26 82, 38 88, 50 88 
                     C 62 88, 74 82, 74 72 
                     C 74 64, 66 58, 70 48 
                     C 74 38, 82 34, 82 24 
                     C 82 14, 68 12, 50 12"
                  stroke="url(#circuitGradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                />
                
                <motion.circle
                  r="3"
                  fill="#e10600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? {
                    opacity: [0, 1, 1],
                    offsetDistance: ['0%', '100%'],
                  } : { opacity: 0 }}
                  transition={{
                    offsetDistance: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 2.5,
                    },
                    opacity: { duration: 0.5, delay: 2.5 },
                  }}
                  style={{
                    offsetPath: `path("M 50 12 C 28 12, 18 24, 18 34 C 18 44, 26 48, 30 52 C 34 56, 26 66, 26 72 C 26 82, 38 88, 50 88 C 62 88, 74 82, 74 72 C 74 64, 66 58, 70 48 C 74 38, 82 34, 82 24 C 82 14, 68 12, 50 12")`,
                    filter: 'drop-shadow(0 0 6px #e10600)',
                  }}
                />

                <defs>
                  <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00fff0" />
                    <stop offset="50%" stopColor="#e10600" />
                    <stop offset="100%" stopColor="#00fff0" />
                  </linearGradient>
                </defs>
              </svg>

              {corners.map((corner) => (
                <motion.button
                  key={corner.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 2 + corner.id * 0.15, type: 'spring' }}
                  className={`absolute w-8 h-8 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    activeCorner === corner.id
                      ? 'bg-f1-red text-white scale-110'
                      : 'bg-racing-gray border border-white/20 text-chrome/70 hover:border-f1-red/50 hover:text-white'
                  }`}
                  style={{ 
                    left: `${corner.x}%`, 
                    top: `${corner.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => setActiveCorner(activeCorner === corner.id ? null : corner.id)}
                >
                  {corner.id}
                </motion.button>
              ))}
              
              <div className="absolute -bottom-12 left-0 right-0 flex justify-between font-mono text-[10px] text-chrome/30">
                <span>START/FINISH</span>
                <span>CLOCKWISE</span>
              </div>
            </div>

            {activeCornerData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-16 relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-f1-red/50 via-transparent to-f1-red/50" />
                <div className="relative bg-racing-black p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-f1-red text-sm">T{activeCornerData.id}</span>
                    <h4 className="font-display text-2xl text-chrome-light">{activeCornerData.name}</h4>
                    <span className="font-mono text-xs text-chrome/40">{activeCornerData.subtitle}</span>
                  </div>
                  <p className="text-chrome/60 text-sm">{activeCornerData.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-2 gap-4">
              {circuitStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 border border-white/5 group-hover:border-neon-cyan/20 transition-colors">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-chrome/40 mb-2">{stat.label}</p>
                    <p className="font-display text-4xl text-chrome-light">
                      {stat.value}
                      {stat.unit && <span className="text-lg text-chrome/50 ml-1">{stat.unit}</span>}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-neon-cyan" />
                <h3 className="font-display text-2xl text-chrome-light tracking-wide">CIRCUIT HIGHLIGHTS</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'THE SNAIL SECTION',
                    turns: 'T1-T3',
                    description: 'A unique tightening spiral inspired by the Chinese "shang" character. Drivers enter at high speed and must maintain momentum through decreasing radius corners.',
                  },
                  {
                    title: 'TECHNICAL CHALLENGE',
                    turns: '16 CORNERS',
                    description: 'A mix of high-speed sweepers and technical sections. The track flows beautifully but punishes mistakes severely.',
                  },
                  {
                    title: 'OVERTAKING ZONES',
                    turns: '2 DRS',
                    description: 'Long straights provide excellent overtaking opportunities, making for exciting wheel-to-wheel racing action.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: 1.2 + index * 0.15 }}
                    className="group relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-f1-red transition-colors duration-300" />
                    <div className="pl-6 py-2">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h4 className="font-display text-lg text-chrome-light group-hover:text-f1-red transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[10px] text-chrome/30">{item.turns}</span>
                      </div>
                      <p className="text-chrome/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
