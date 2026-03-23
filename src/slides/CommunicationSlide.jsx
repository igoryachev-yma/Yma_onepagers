import A, { scaleIn } from '../components/A'

const meetings = [
  {
    title: 'Weekly Planning',
    schedule: 'Monday at 12:00 CET',
    desc: 'Plan the week, share updates, and align on priorities across the team.',
    color: 'card-icon-blue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2.5" y="3" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7h13M6 1.5v3M12 1.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Weekly Retrospective',
    schedule: 'Friday at 14:00 CET',
    desc: 'Celebrate wins, surface blockers, and reflect on what went well or could improve.',
    color: 'card-icon-green',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Dev Team Syncs',
    schedule: 'For developers only',
    desc: 'Sprint planning and project-specific discussions. Ask Sergei to add you if you are on the dev team.',
    color: 'card-icon-amber',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 6l-3 3 3 3M12 6l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4l-2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const channels = [
  { name: '#general', purpose: 'Company-wide announcements & intros' },
  { name: '#people-culture', purpose: 'Team rituals, birthdays & culture' },
  { name: 'Your team channel', purpose: 'Day-to-day work with your team' },
]

export default function CommunicationSlide() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Communication</p></A>
        <A d={1}><h2>Meetings &amp; Channels</h2></A>
        <A d={2}><p className="section-subtitle">How we stay aligned and connected</p></A>

        <div className="card-grid card-grid-3">
          {meetings.map((m, i) => (
            <A key={i} v={scaleIn} d={i + 3} className="card">
              <div className={`card-icon ${m.color}`}>{m.icon}</div>
              <div className="card-header">
                <h3>{m.title}</h3>
              </div>
              <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--blue-600)', marginBottom: 6 }}>{m.schedule}</p>
              <p>{m.desc}</p>
            </A>
          ))}
        </div>

        <A d={7}>
          <div style={{ marginTop: 20 }}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Slack Channel</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {channels.map((ch, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{ch.name}</td>
                      <td>{ch.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </A>
      </div>
    </section>
  )
}
