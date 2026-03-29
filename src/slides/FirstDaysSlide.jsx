import A, { scaleIn } from '../components/A'

const steps = [
  {
    date: 'Day 1',
    title: 'Get Access',
    desc: 'Set up Google, Slack, Linear, Notion, and GitLab. Enable 2FA. Add your avatar and role description.',
    color: '#3b82f6',
  },
  {
    date: 'Day 1',
    title: 'Say Hello',
    desc: 'Post a short intro in #general on Slack — your name, role, background, and a fun fact about you.',
    stat: '#general',
    color: '#22c55e',
  },
  {
    date: 'Week 1',
    title: 'Explore & Learn',
    desc: 'Read the Company Home in Notion. Get to know your team, your direct manager, and current projects.',
    color: '#f59e0b',
  },
  {
    date: 'Week 1–2',
    title: 'Join the Rhythm',
    desc: 'Attend your first Weekly Planning (Monday) and Retrospective (Friday). Ask questions freely.',
    stat: 'Mon & Fri',
    color: '#8b5cf6',
  },
]

export default function FirstDaysSlide() {
  return (
    <section className="slide">
      <div className="slide-inner slide-inner-wide">
        <A><p className="tag">Your Roadmap</p></A>
        <A d={1}><h2>Your First Days</h2></A>

        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-cards">
            {steps.map((s, i) => (
              <A key={i} v={scaleIn} d={i + 2} className="timeline-card">
                <div className="timeline-accent" style={{ background: s.color }} />
                <div className="timeline-card-top">
                  <span className="timeline-date">{s.date}</span>
                </div>
                <h3 className="timeline-title">{s.title}</h3>
                <p className="timeline-desc">{s.desc}</p>
                {s.stat && <span className="timeline-stat-badge">{s.stat}</span>}
              </A>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
