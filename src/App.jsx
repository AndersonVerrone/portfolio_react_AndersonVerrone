 import { GlobalStyle } from './styles/globalStyles'
import { DesktopContainer } from './components/DesktopContainer'
import { TaskBarContainer } from './components/TaskBarContainer'
import { StartButton } from './components/StartButton'

function App() {

  return (
    <>
    <GlobalStyle />
    <DesktopContainer>

      <TaskBarContainer>
        <StartButton />
      </TaskBarContainer>
    </DesktopContainer>
    </>
  )
}

export default App
