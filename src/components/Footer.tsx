import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative py-24 overflow-hidden bg-racing-dark">
      <div className="absolute inset-0 carbon-pattern opacity-10" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-5">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,100 L0,70 Q100,50 200,70 Q300,90 400,60 Q500,30 600,50 Q700,70 800,40 Q900,10 1000,50 Q1100,90 1200,60 Q1300,30 1440,70 L1440,100 Z"
            fill="currentColor"
            className="text-chrome"
          />
          {[100, 200, 350, 500, 650, 800, 950, 1100, 1250, 1350].map((x, i) => (
            <rect key={i} x={x} y={30 + (i % 3) * 15} width={4 + (i % 2) * 2} height={20 + (i % 4) * 10} fill="currentColor" className="text-chrome" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-6">
              <span className="block text-chrome-light">SEE YOU</span>
              <span className="block text-gradient-racing">AT THE TRACK</span>
            </h2>
            <p className="text-chrome/50 text-lg max-w-md">
              Experience the thrill of Formula 1 racing at Shanghai International Circuit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:text-right"
          >
            <div className="inline-block">
              <div className="font-mono text-xs text-chrome/40 tracking-wider mb-2">EVENT DATE</div>
              <div className="font-display text-4xl md:text-5xl text-chrome-light">
                APR 17-19
              </div>
              <div className="font-mono text-chrome/40 mt-1">2026</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative py-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-f1-red flex items-center justify-center">
                  <span className="font-display text-white text-xl">F1</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-f1-red/30" />
              </div>
              <div>
                <div className="font-display text-lg text-chrome-light tracking-wide">
                  SHANGHAI GRAND PRIX
                </div>
                <div className="font-mono text-[10px] text-chrome/40 tracking-wider">
                  FORMULA 1 CHINESE GP 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {['PRACTICE', 'QUALIFYING', 'RACE'].map((item) => (
                <span key={item} className="font-mono text-[10px] text-chrome/30 tracking-wider hidden md:block">
                  {item}
                </span>
              ))}
            </div>

            <div className="font-mono text-xs text-chrome/30 tracking-wider text-center md:text-right">
              <div>FAN SITE / NOT AFFILIATED</div>
              <div className="text-chrome/20">WITH FORMULA 1 OR FIA</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-chrome/20 tracking-widest">
              31.3389°N / 121.2198°E
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-f1-red animate-pulse" />
            <span className="font-mono text-[10px] text-chrome/30 tracking-widest">
              MADE WITH PASSION FOR RACING
            </span>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 left-4 font-mono text-[8px] text-chrome/10 tracking-widest">
        SIC / ROUND 04
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[8px] text-chrome/10 tracking-widest">
        5.451KM / 16T
      </div>
    </footer>
  )
}
