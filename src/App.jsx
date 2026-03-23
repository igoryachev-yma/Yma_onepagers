import Progress from './components/Progress'
import TitleSlide from './slides/TitleSlide'
import MissionSlide from './slides/MissionSlide'
import TeamSlide from './slides/TeamSlide'
import DividerSlide from './slides/DividerSlide'
import SetupSlide from './slides/SetupSlide'
import FirstDaysSlide from './slides/FirstDaysSlide'
import CommunicationSlide from './slides/CommunicationSlide'
import CultureSlide from './slides/CultureSlide'
import ClosingSlide from './slides/ClosingSlide'

const SLIDE_COUNT = 10

export default function App() {
  return (
    <>
      <Progress count={SLIDE_COUNT} />

      <TitleSlide />

      <MissionSlide />

      <TeamSlide />

      <DividerSlide
        tag="Getting Started"
        title="Let's Set You Up"
        subtitle="Everything you need to hit the ground running — tools, access, and your first steps"
      />

      <SetupSlide />

      <FirstDaysSlide />

      <DividerSlide
        tag="Day to Day"
        title="How We Work"
        subtitle="Communication, meetings, and the principles that guide our collaboration"
      />

      <CommunicationSlide />

      <CultureSlide />

      <ClosingSlide />
    </>
  )
}
