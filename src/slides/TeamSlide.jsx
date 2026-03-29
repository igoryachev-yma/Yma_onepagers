import A, { scaleIn, fadeIn } from '../components/A'

const leadership = [
  {
    name: 'Andrey Perfiliev, MD',
    role: 'CEO & Co-founder',
    bio: '15+ years in med-tech and healthcare leadership, AI, genomics, and molecular oncology.',
    photo: '/team/andrey-perfilyev.jpg',
  },
  {
    name: 'Sergei Savvov',
    role: 'CTO & Co-Founder',
    bio: '10+ years in data science in med-tech, building AI applications and predictive models.',
    photo: '/team/sergei-savvov.jpg',
  },
  {
    name: 'Nastya Popova, MA',
    role: 'CXO',
    bio: '20+ years interpreting tech-to-human, experience designer, 10+ years in comms & marketing.',
    photo: '/team/nastya-popova.jpg',
  },
  {
    name: 'Viktoria Kushpelev',
    role: 'Chief of Ops & Legal',
    bio: '17 years in M&A, VC, and legal, 7 years leading global healthcare projects. Stanford AI in Healthcare.',
    photo: '/team/vika-kushpeleva.jpg',
  },
  {
    name: 'Yury Poteshkin, MD, PhD',
    role: 'Head of Medical Analytics',
    bio: '15+ years in medical science, practicing endocrinologist, researcher, analyst, and medical writer.',
    photo: '/team/yuriy-poteshkin.jpg',
  },
]

const team = [
  { name: 'Philip Loginov', role: 'Head of Sales', photo: '/team/philip-loginov.jpg' },
  { name: 'Ilya Marinov, PhD', role: 'Head of Partnerships', photo: '/team/ilya-marinov.jpg' },
  { name: 'Nika Abduragimova', role: 'Creative Producer', photo: '/team/nika-abduragimova.jpg' },
  { name: 'Viktoriia Palagina', role: 'Product Manager', photo: '/team/viktoriia-palagina.jpg' },
  { name: 'Daniil Pimanov, PhD', role: 'LLM Engineer', photo: '/team/daniil-pimanov.jpg' },
  { name: 'Vasilii Kostrubov', role: 'Backend Developer', photo: '/team/vasilii-kostrubov.jpg' },
  { name: 'Alexei Dragun', role: 'QA Engineer', photo: '/team/alexei-dragun.jpg' },
  { name: 'Omar Ospanov', role: 'Jr. Content Engineer', photo: '/team/omar-ospanov.jpg' },
]

export default function TeamSlide() {
  return (
    <section className="slide">
      <div className="slide-inner slide-inner-wide">
        <A><p className="tag">People Who Build Yma</p></A>
        <A d={1}><h2>Meet the Team</h2></A>

        <div className="team-leadership">
          {leadership.map((p, i) => (
            <A key={i} v={scaleIn} d={i + 2} className="team-lead-card">
              <img src={p.photo} alt={p.name} className="team-lead-photo" />
              <div>
                <h3 className="team-lead-name">{p.name}</h3>
                <p className="team-lead-role">{p.role}</p>
                <p className="team-lead-bio">{p.bio}</p>
              </div>
            </A>
          ))}
        </div>

        <A v={fadeIn} d={8}>
          <div className="team-grid">
            {team.map((p, i) => (
              <div key={i} className="team-member">
                <img src={p.photo} alt={p.name} className="team-member-photo" />
                <span className="team-member-name">{p.name}</span>
                <span className="team-member-role">{p.role}</span>
              </div>
            ))}
          </div>
        </A>
      </div>
    </section>
  )
}
