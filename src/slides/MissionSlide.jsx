import A, { scaleIn } from '../components/A'
import DecoCircle from '../components/DecoCircle'

export default function MissionSlide() {
  const cards = [
    {
      iconColor: 'card-icon-green',
      title: 'Our Mission',
      text: 'We build technology that helps healthcare providers deliver better patient experiences — from scheduling to billing to analytics.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5v15M1.5 9h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 5.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      iconColor: 'card-icon-blue',
      title: 'What We Build',
      text: 'An AI-powered platform for healthcare operations — intelligent scheduling, automated workflows, and data-driven insights for clinics worldwide.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      iconColor: 'card-icon-amber',
      title: 'Why It Matters',
      text: 'Healthcare is complex and often broken. We reduce friction for providers so they can focus on what matters most — their patients.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2l2.1 4.26L16 6.9l-3.5 3.41.83 4.82L9 12.76l-4.33 2.37.83-4.82L2 6.9l4.9-.64L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      iconColor: 'card-icon-green',
      title: 'Our Culture',
      text: 'Human-centered, async-first, feedback-driven. We keep things simple, communicate openly, and care about each person on the team.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 15.75s-6-3.75-6-8.25a4.125 4.125 0 017.03-2.92L9 3.56l-1.03 1.02A4.125 4.125 0 0115 7.5c0 4.5-6 8.25-6 8.25z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="slide">
      <DecoCircle />
      <div className="slide-inner">
        <A><p className="tag">About Yma</p></A>
        <A d={1}><h2>What We Do &amp; Why</h2></A>
        <A d={2}><p className="section-subtitle">The basics you need to understand our company</p></A>

        <div className="card-grid">
          {cards.map((c, i) => (
            <A key={i} v={scaleIn} d={i + 3} className="card">
              <div className={`card-icon ${c.iconColor}`}>{c.icon}</div>
              <div className="card-header">
                <h3>{c.title}</h3>
              </div>
              <p>{c.text}</p>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}
