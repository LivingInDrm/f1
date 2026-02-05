import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 200])
  const y2 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, prefersReducedMotion ? 1 : 0.9])

  useEffect(() => {
    const raceDate = new Date('2026-04-19T14:00:00+08:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = raceDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToBasics = () => {
    document.getElementById('f1-basics')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-racing-black">
      <div className="absolute inset-0 carbon-pattern opacity-30" />
      
      {!prefersReducedMotion && (
        <motion.div 
          style={{ y: y1, willChange: 'transform' }}
          className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[200%]"
              style={{
                top: `${15 + i * 20}%`,
                left: '-50%',
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#e10600' : '#00fff0'} 50%, transparent)`,
                opacity: 0.4,
                transform: 'skewY(-5deg)',
                willChange: 'transform',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      )}

      <motion.div
        style={{ y: y2, willChange: 'transform' }}
        className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-f1-red/20 blur-[80px] md:blur-[150px] rounded-full" />
        <div className="absolute top-20 left-20 w-40 h-40 border border-f1-red/20 rotate-45 hidden md:block" />
      </motion.div>
      
      <motion.div
        style={{ y: y1, willChange: 'transform' }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-neon-cyan/10 blur-[60px] md:blur-[120px] rounded-full" />
      </motion.div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-f1-red to-transparent opacity-50" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-f1-red to-transparent opacity-50" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-racing-gray/50 border border-f1-red/30 text-chrome-light text-sm font-mono tracking-[0.2em] uppercase">
            <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse" />
            Formula 1 Chinese Grand Prix
            <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse" />
          </span>
        </motion.div>

        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight"
          >
            <motion.span 
              className="block text-gradient-chrome"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              SHANGHAI
            </motion.span>
            <motion.span 
              className="block text-gradient-racing relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              GRAND PRIX
              <motion.span
                className="absolute -right-4 top-0 text-[0.15em] text-f1-red font-mono tracking-normal rotate-90 origin-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                2026
              </motion.span>
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 border-gradient origin-center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-chrome/70 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light"
        >
          Experience the pinnacle of motorsport at the legendary
          <span className="text-f1-red font-medium"> Shanghai International Circuit</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative inline-block mb-16"
        >
          <div className="absolute -inset-[1px] border-gradient opacity-50" />
          <div className="relative bg-racing-black/90 p-1">
            <div className="flex items-stretch">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HRS' },
                { value: timeLeft.minutes, label: 'MIN' },
                { value: timeLeft.seconds, label: 'SEC' },
              ].map((item, index) => (
                <div key={item.label} className="flex items-stretch">
                  {index > 0 && (
                    <div className="flex flex-col justify-center px-2 md:px-4">
                      <span className="text-f1-red text-2xl md:text-4xl font-mono">:</span>
                    </div>
                  )}
                  <div className="relative group px-4 md:px-8 py-4 md:py-6 bg-racing-gray/30">
                    <div className="absolute inset-0 bg-f1-red/0 group-hover:bg-f1-red/5 transition-colors duration-300" />
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-f1-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <motion.span
                      key={item.value}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="block font-mono text-4xl md:text-7xl font-bold text-chrome-light tabular-nums"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.span>
                    <span className="block text-[10px] md:text-xs text-chrome/50 font-mono tracking-[0.3em] mt-1">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToBasics}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-f1-red" />
            <div className="absolute inset-0 bg-gradient-to-r from-f1-red via-f1-red-bright to-f1-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <span className="relative z-10 flex items-center gap-4 px-10 py-4 font-display text-xl tracking-[0.15em] text-white">
              <span className="w-8 h-[2px] bg-white/50 group-hover:w-4 transition-all duration-300" />
              DISCOVER F1
              <span className="w-8 h-[2px] bg-white/50 group-hover:w-4 transition-all duration-300" />
            </span>
          </motion.button>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            onClick={scrollToBasics}
          >
            <span className="text-xs font-mono tracking-[0.3em] text-chrome/50">SCROLL</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-chrome/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-racing-black to-transparent pointer-events-none" />
      
      <motion.div 
        className="absolute bottom-8 left-8 font-mono text-[10px] text-chrome/30 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div>LAT 31.3389° N</div>
        <div>LNG 121.2198° E</div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 right-8 font-mono text-[10px] text-chrome/30 tracking-wider text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div>ROUND 04</div>
        <div>2026 SEASON</div>
      </motion.div>
    </section>
  )
}
