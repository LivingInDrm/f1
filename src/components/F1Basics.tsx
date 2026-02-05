import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Gauge, Activity, Flame } from 'lucide-react'

const stats = [
  {
    icon: Gauge,
    value: 370,
    suffix: 'km/h',
    label: 'TOP SPEED',
    description: 'Faster than a commercial airplane taking off',
    accent: '#00fff0',
  },
  {
    icon: Zap,
    value: 2.6,
    suffix: 'sec',
    label: '0-100 KM/H',
    description: 'Quicker than you can say "Formula One"',
    accent: '#f0ff00',
  },
  {
    icon: Activity,
    value: 6,
    suffix: 'G',
    label: 'MAX G-FORCE',
    description: 'Fighter pilots experience similar forces',
    accent: '#e10600',
  },
  {
    icon: Flame,
    value: 1000,
    suffix: '+HP',
    label: 'ENGINE POWER',
    description: 'Hybrid turbo V6 engineering marvel',
    accent: '#00fff0',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 1500
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current * 10) / 10)
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-mono text-5xl md:text-6xl font-bold tabular-nums">
      {displayValue}
      <span className="text-2xl md:text-3xl ml-1 text-chrome/50">{suffix}</span>
    </span>
  )
}

export function F1Basics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="f1-basics" className="pt-32 pb-32 md:pt-48 md:pb-40 relative overflow-hidden bg-racing-black">
      <div className="absolute inset-0 diagonal-stripe" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent" />

      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-f1-red/5 blur-[150px]" />
      <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px]" />

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
              className="h-[2px] bg-f1-red"
            />
            <span className="font-mono text-xs tracking-[0.3em] text-chrome/50">01 / BASICS</span>
          </div>
          
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            <motion.span 
              className="block text-chrome-light"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WHAT IS
            </motion.span>
            <motion.span 
              className="block text-gradient-racing"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              FORMULA 1?
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-chrome/60 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            The highest class of international racing for single-seater formula racing cars. 
            Where <span className="text-f1-red">cutting-edge technology</span> meets human precision 
            at <span className="text-neon-cyan">breathtaking speeds</span>.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${stat.accent}10, transparent 70%)` }}
                />
                
                <div className="relative bg-racing-gray/30 border border-white/5 group-hover:border-white/10 transition-all duration-300 p-8">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l border-t transition-all duration-300 group-hover:w-20 group-hover:h-20" style={{ borderColor: stat.accent + '30' }} />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b transition-all duration-300 group-hover:w-20 group-hover:h-20" style={{ borderColor: stat.accent + '30' }} />
                  
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="p-3 border transition-colors duration-300"
                      style={{ borderColor: stat.accent + '30', color: stat.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-chrome/30">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="font-display text-xl tracking-wider mb-2" style={{ color: stat.accent }}>
                    {stat.label}
                  </h3>
                  <p className="text-chrome/50 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-f1-red/20 via-transparent to-f1-red/20" />
          <div className="relative bg-racing-dark p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-3 h-3 bg-f1-red" />
              <h3 className="font-display text-3xl md:text-4xl text-chrome-light tracking-wide">
                RACE WEEKEND FORMAT
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: 'PRACTICE',
                  subtitle: 'FP1 / FP2 / FP3',
                  description: 'Teams fine-tune their cars and drivers learn the track. Three practice sessions spread across Friday and Saturday.',
                  number: '01',
                },
                {
                  title: 'QUALIFYING',
                  subtitle: 'Q1 / Q2 / Q3',
                  description: 'Drivers compete for the best starting position. Three knockout rounds determine the grid for race day.',
                  number: '02',
                },
                {
                  title: 'GRAND PRIX',
                  subtitle: '56 LAPS',
                  description: 'The main event. Strategy, skill, and split-second decisions determine who stands on the podium.',
                  number: '03',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                  className="relative group"
                >
                  <span className="absolute -top-6 -left-2 font-display text-8xl text-white/[0.03] select-none">
                    {item.number}
                  </span>
                  
                  <div className="relative">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h4 className="font-display text-2xl text-f1-red">{item.title}</h4>
                      <span className="font-mono text-xs text-chrome/30">{item.subtitle}</span>
                    </div>
                    <p className="text-chrome/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-f1-red to-transparent transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
