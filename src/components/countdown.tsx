'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type CountdownProps = {
  targetDate: Date
  onComplete?: () => void
  className?: string
}

type TimeLeft = {
  months: string
  days: string
  hours: string
  minutes: string
  seconds: string
}

export default function Countdown({ targetDate, onComplete, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        if (onComplete) onComplete()
        return {
          months: '00',
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        }
      }

      // Calculate time units
      const seconds = Math.floor((difference / 1000) % 60)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const days = Math.floor(difference / (1000 * 60 * 60 * 24) % 30.44) // Approximate month length
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44))

      return {
        months: months.toString().padStart(2, '0'),
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      }
    }

    // Update immediately
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, onComplete])

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <CountdownTimeUnit value={timeLeft.months} label="Months" />
      <CountdownSeparator />
      <CountdownTimeUnit value={timeLeft.days} label="Days" />
      <CountdownSeparator />
      <CountdownTimeUnit value={timeLeft.hours} label="Hours" />
      <CountdownSeparator />
      <CountdownTimeUnit value={timeLeft.minutes} label="Minutes" />
      <CountdownSeparator />
      <CountdownTimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

function CountdownTimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center gap-px font-bebas-neue">
        {value.split('').map((digit, index) => (
          <motion.span
            key={index}
            className="inline-block text-5xl font-bold bg-gradient-to-b from-green-800 to-green-950 text-white tabular-nums px-1.5 pt-2 pb-1"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.5,
              times: [0, 0.5, 1],
              repeat: 0,
            }}
          >
            {digit}
          </motion.span>
        ))}
      </div>
      <span className="text-[9px] capitalize tracking-wider font-medium font-poppins">{label}</span>
    </div>
  )
}

function CountdownSeparator() {
  return (
    <motion.span
      className="w-2 h-2 bg-transparent border-2 border-black rounded-full"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
    </motion.span>
  )
}
