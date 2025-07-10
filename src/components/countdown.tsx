import { useEffect, useState } from 'react'

type CountdownProps = {
  targetDate: Date
  onComplete?: () => void
  className?: string
}

type TimeLeft = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

function Countdown({ targetDate, onComplete, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
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
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))

      return {
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
    <div className={`flex items-center justify-center gap-4 p-8 ${className}`}>
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
      <div className="flex gap-1">
        {value.split('').map((digit, index) => (
          <div key={index} className="w-16 h-20 bg-gradient-to-b from-[#223A90] to-black flex items-center justify-center shadow-lg ">
            <span className="text-white text-4xl font-bold font-mono tabular-nums">
              {digit}
            </span>
          </div>
        ))}
      </div>
      <span className="text-gray-700 text-xs font-medium mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}

function CountdownSeparator() {
  return (
    <div className="flex flex-col gap-2 pb-6">
      <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
    </div>
  )
}

// Demo component with July 11, 2025 deadline
function CountdownDemo() {
  // Set target date to July 11, 2025 at midnight
  const targetDate = new Date('2025-07-11T00:00:00')

  return (
    <div className="flex items-center py-10 justify-center">
      <div className="text-center">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Countdown Timer</h1> */}
        <p className="">Countdown to Grant Application Submission</p>
        {/* <Countdown  targetDate={targetDate} onComplete={() => alert('Countdown completed! July 11, 2025 has arrived!')}/> */}
        <Countdown targetDate={targetDate} />
      </div>
    </div>
  )
}



export default CountdownDemo