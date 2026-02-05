import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const scheduleData = [
  {
    day: 'FRI',
    fullDay: 'FRIDAY',
    date: 'APR 17',
    events: [
      { time: '11:30', timeUTC: '03:30 UTC', code: 'FP1', name: 'Free Practice 1', duration: '60 MIN' },
      { time: '15:00', timeUTC: '07:00 UTC', code: 'FP2', name: 'Free Practice 2', duration: '60 MIN' },
    ],
  },
  {
    day: 'SAT',
    fullDay: 'SATURDAY',
    date: 'APR 18',
    events: [
      { time: '11:30', timeUTC: '03:30 UTC', code: 'FP3', name: 'Free Practice 3', duration: '60 MIN' },
      { time: '15:00', timeUTC: '07:00 UTC', code: 'QUAL', name: 'Qualifying', duration: 'Q1/Q2/Q3' },
    ],
  },
  {
    day: 'SUN',
    fullDay: 'SUNDAY',
    date: 'APR 19',
    events: [
      { time: '14:00', timeUTC: '06:00 UTC', code: 'RACE', name: 'Grand Prix', duration: '56 LAPS', isRace: true },
    ],
  },
]

export function RaceSchedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="schedule" className="pt-32 pb-32 md:pt-48 md:pb-40 relative overflow-hidden bg-racing-black">
      <div className="absolute inset-0 diagonal-stripe" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-yellow/30 to-transparent" />
      
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-neon-yellow/5 blur-[150px]" />
      <div className="absolute bottom-1/4 -left-32 w-[300px] h-[300px] rounded-full bg-f1-red/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
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
              className="h-[2px]"
              style={{ background: '#f0ff00' }}
            />
            <span className="font-mono text-xs tracking-[0.3em] text-chrome/50">03 / SCHEDULE</span>
          </div>
          
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            <motion.span 
              className="block text-chrome-light"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              RACE
            </motion.span>
            <motion.span 
              className="block"
              style={{ color: '#f0ff00' }}
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              WEEKEND
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-chrome/60 text-lg max-w-2xl"
          >
            All times in <span className="text-chrome-light font-medium">Shanghai local time</span> (CST / UTC+8)
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + dayIndex * 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="relative">
                  <div className="sticky top-32 w-20 md:w-24">
                    <div className="text-center">
                      <div className="font-display text-4xl md:text-5xl text-chrome-light">{day.day}</div>
                      <div className="font-mono text-[10px] tracking-wider text-chrome/40 mt-1">{day.date}</div>
                    </div>
                    <div className="absolute top-full left-1/2 w-px h-full bg-gradient-to-b from-white/20 to-transparent -translate-x-1/2 mt-4" />
                  </div>
                </div>

                <div className="space-y-3 pb-8">
                  {day.events.map((event, eventIndex) => {
                    const isRace = 'isRace' in event && event.isRace
                    
                    return (
                      <motion.div
                        key={event.code}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 0.5 + dayIndex * 0.15 + eventIndex * 0.1 }}
                        className="group relative"
                      >
                        {isRace && (
                          <div className="absolute -inset-[1px] bg-gradient-to-r from-f1-red via-f1-red-bright to-f1-red opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}
                        
                        <div className={`relative flex items-stretch transition-all duration-300 ${
                          isRace 
                            ? 'bg-racing-black' 
                            : 'bg-racing-gray/30 border border-white/5 group-hover:border-white/10'
                        }`}>
                          <div className={`flex items-center justify-center px-4 md:px-6 font-mono text-sm md:text-base font-bold ${
                            isRace 
                              ? 'bg-f1-red text-white min-w-[80px] md:min-w-[100px]' 
                              : 'bg-white/5 text-chrome/50 min-w-[80px] md:min-w-[100px]'
                          }`}>
                            {event.code}
                          </div>
                          
                          <div className="flex-1 flex items-center justify-between p-4 md:p-6 gap-4">
                            <div>
                              <h4 className={`font-display text-xl md:text-2xl tracking-wide ${
                                isRace ? 'text-chrome-light' : 'text-chrome/80 group-hover:text-chrome-light'
                              } transition-colors`}>
                                {event.name.toUpperCase()}
                              </h4>
                              <p className="font-mono text-xs text-chrome/40 mt-1">{event.duration}</p>
                            </div>
                            
                            <div className="text-right">
                              <p className={`font-mono text-2xl md:text-3xl tabular-nums ${
                                isRace ? 'text-chrome-light' : 'text-chrome/70'
                              }`}>
                                {event.time}
                              </p>
                              <p className="font-mono text-[10px] text-chrome/30 mt-1">{event.timeUTC}</p>
                            </div>
                          </div>
                          
                          {isRace && (
                            <>
                              <motion.div
                                className="absolute inset-0 pointer-events-none"
                                animate={{
                                  background: [
                                    'linear-gradient(90deg, transparent 0%, rgba(225,6,0,0.1) 50%, transparent 100%)',
                                    'linear-gradient(90deg, transparent 100%, rgba(225,6,0,0.1) 150%, transparent 200%)',
                                  ],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                              />
                              <div className="absolute top-0 right-0 px-3 py-1 bg-f1-red font-mono text-[10px] tracking-wider">
                                MAIN EVENT
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="font-mono text-xs text-chrome/30 tracking-wider">
              SCHEDULE SUBJECT TO CHANGE. CHECK OFFICIAL F1 CHANNELS FOR UPDATES.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-f1-red" />
                <span className="font-mono text-xs text-chrome/50">RACE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-white/20" />
                <span className="font-mono text-xs text-chrome/50">SESSION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
