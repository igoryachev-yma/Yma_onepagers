import A from '../components/A'
import DecoCircle from '../components/DecoCircle'

export default function TitleSlide() {
  return (
    <section className="slide slide-title">
      <div className="title-gradient" />
      <DecoCircle />
      <DecoCircle className="deco-bottom-left" />

      <div className="slide-inner title-inner">
        <A>
          <img src="/yma_logo.svg" alt="Yma" className="title-logo" />
        </A>

        <A d={1}>
          <h1 className="title-heading">
            Welcome to Yma
          </h1>
          <p className="title-desc">
            Everything you need to feel at home, get oriented, and start making an impact from day one.
          </p>
        </A>

        <A d={2}>
          <div className="title-meta">
            <span className="title-badge">Onboarding</span>
            <span className="title-date">2026</span>
          </div>
        </A>
      </div>
    </section>
  )
}
