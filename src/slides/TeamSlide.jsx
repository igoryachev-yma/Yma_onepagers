import A, { scaleIn } from '../components/A'

const contacts = [
  {
    role: 'General Questions & Access',
    name: 'Sergei',
    desc: 'Your go-to person for tool access, accounts setup, Slack, GitLab, and any general onboarding questions.',
    color: 'card-icon-blue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 15.75c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    role: 'Your Direct Manager',
    name: 'Ask on Day 1',
    desc: 'Make sure you know who your direct manager is — they will guide your goals, priorities, and growth path.',
    color: 'card-icon-green',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    role: 'Development Team',
    name: 'If applicable',
    desc: 'If you are joining the dev team, contact Sergei to be added to sprint planning and technical discussions.',
    color: 'card-icon-amber',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 6l-3 3 3 3M12 6l3 3-3 3M10 4l-2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function TeamSlide() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">The Team</p></A>
        <A d={1}><h2>Key Contacts</h2></A>
        <A d={2}><p className="section-subtitle">Who to reach out to when you need help</p></A>

        <div className="card-grid card-grid-3">
          {contacts.map((c, i) => (
            <A key={i} v={scaleIn} d={i + 3} className="card">
              <div className={`card-icon ${c.color}`}>{c.icon}</div>
              <div className="card-header">
                <h3>{c.role}</h3>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--black)', marginBottom: 4 }}>{c.name}</p>
              <p>{c.desc}</p>
            </A>
          ))}
        </div>

        <A d={7} className="callout-stat">
          <span className="callout-stat-label">Explore</span>
          <p className="callout-stat-text">
            Check out the <span className="hl">Company Home</span> in Notion to learn about the full team structure and current projects.
          </p>
        </A>
      </div>
    </section>
  )
}
