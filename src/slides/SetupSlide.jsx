import A, { scaleIn } from '../components/A'

const tools = [
  {
    name: 'Google Workspace',
    desc: 'Email, calendar, and shared drives',
    color: 'card-icon-blue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2.5" y="4" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 6l6.5 4.5L15.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    desc: 'Team communication & channels',
    color: 'card-icon-green',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M7 2a1.5 1.5 0 000 3h1.5V3.5A1.5 1.5 0 007 2zM2 7a1.5 1.5 0 013 0v1.5H3.5A1.5 1.5 0 012 7zM11 16a1.5 1.5 0 000-3H9.5v1.5A1.5 1.5 0 0011 16zM16 11a1.5 1.5 0 01-3 0V9.5h1.5A1.5 1.5 0 0116 11z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8.5 5H11a1.5 1.5 0 010 3H8.5V5zM5 9.5V11a1.5 1.5 0 01-3 0 1.5 1.5 0 011.5-1.5H5zM9.5 13V11a1.5 1.5 0 013 0 1.5 1.5 0 01-1.5 1.5H9.5v.5zM13 8.5V7a1.5 1.5 0 00-3 0 1.5 1.5 0 001.5 1.5H13z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Trello',
    desc: 'Task tracking & project boards',
    color: 'card-icon-amber',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2.5" y="2.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4.5" y="4.5" width="3.5" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="10" y="4.5" width="3.5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'GitLab',
    desc: 'Code management (if applicable)',
    color: 'card-icon-blue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 15.5L1.5 10l2.8-8.6a.4.4 0 01.76 0L7.5 7h3l2.44-5.6a.4.4 0 01.76 0L16.5 10 9 15.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    desc: 'Knowledge base & documentation',
    color: 'card-icon-green',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 2.5h8.5a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 14V4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 2.5L6 4.5M7 7.5h4M7 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    desc: 'Team chat group (ask Sergei)',
    color: 'card-icon-amber',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 9l13.5-5.5L12 15l-3-3.5L2 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 11.5l3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SetupSlide() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Your Toolkit</p></A>
        <A d={1}><h2>Tools &amp; Access</h2></A>
        <A d={2}><p className="section-subtitle">Get access to these tools — message Sergei in Slack if anything is missing</p></A>

        <div className="card-grid card-grid-3">
          {tools.map((t, i) => (
            <A key={i} v={scaleIn} d={i + 3} className="card">
              <div className={`card-icon ${t.color}`}>{t.icon}</div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </A>
          ))}
        </div>

        <A d={10} className="callout-stat">
          <span className="callout-stat-label">Don't forget</span>
          <p className="callout-stat-text">
            Set up <span className="hl">2FA</span> on Google, Slack, and GitLab. Add your <span className="hl">avatar</span> and <span className="hl">role description</span> everywhere.
          </p>
        </A>
      </div>
    </section>
  )
}
