import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import A from '../components/A'

const values = [
  {
    title: 'Async-First',
    detail: 'We default to async communication. Write things down, share context in Notion and Slack. Meetings are for alignment, not status updates.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="var(--gray-400)" strokeWidth="1.5" />
        <path d="M16 9v7l4.5 4.5" stroke="var(--black)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Open Feedback',
    detail: 'Honest, kind feedback is how we grow. Don\'t wait for formal reviews — share thoughts early, assume good intent, and listen actively.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 12a8 8 0 1113.66 5.66L24 24l-6.34-2.34A8 8 0 018 12z" stroke="var(--gray-400)" strokeWidth="1.5" />
        <path d="M12 14h8M12 18h5" stroke="var(--black)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'People Matter',
    detail: 'We care about each person on the team. Birthdays are celebrated, questions are welcome, and no one should feel invisible or unheard.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 27s-10-6.25-10-13.75a6.875 6.875 0 0111.72-4.87L16 6.6l-1.72 1.78A6.875 6.875 0 0126 13.25C26 20.75 16 27 16 27z" stroke="var(--gray-400)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function CultureSlide() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const [flipped, setFlipped] = useState(values.map(() => false))

  useEffect(() => {
    if (!inView) {
      setFlipped(values.map(() => false))
      return
    }
    const timers = values.map((_, i) =>
      setTimeout(
        () => setFlipped(f => { const n = [...f]; n[i] = true; return n }),
        2000 + i * 800,
      )
    )
    return () => timers.forEach(clearTimeout)
  }, [inView])

  const toggle = (i) => {
    setFlipped(f => { const n = [...f]; n[i] = !n[i]; return n })
  }

  return (
    <section className="slide" ref={ref}>
      <div className="slide-inner">
        <A><p className="tag">Culture</p></A>
        <A d={1}><h2>How We Work Together</h2></A>

        <div className="flip-grid">
          {values.map((v, i) => (
            <div
              key={i}
              className={`flip-card${flipped[i] ? ' flipped' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="flip-card-inner">
                <div className="flip-front">
                  <span className="flip-front-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <span className="flip-hint">click to reveal</span>
                </div>
                <div className="flip-back">
                  <h3>{v.title}</h3>
                  <p>{v.detail}</p>
                  <span className="flip-hint flip-hint-back">click to flip back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
