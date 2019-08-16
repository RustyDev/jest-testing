import React, {Fragment} from "react"
import useGlobalHook from "./useGlobalHook"

const initialState = {
  authenticated: false,
  player: {
    isPlaying: false,
    init: false
  }
}

const actions = {
  login: (store, shouldPlay) => {
    store.setState({ authenticated: true })
  },
  logout: (store) => {
    store.setState({ authenticated: false })
  },
  play: (store) => {
    store.setState({ player: {
      ...store.state.player,
      init:true,
      isPlaying: true
    }})
  }
}

const useGlobal = useGlobalHook(React, initialState, actions)

function App() {

  const [globalState, globalActions] = useGlobal()
  
  const login = () => globalActions.login(true)
  const logout = () => globalActions.logout()
  const play = () => globalActions.play()

  return (
    <>
      <p data-testid="idAuthenticated">{ globalState.authenticated.toString() }</p>
      <p data-testid="idPlayerStatus">{ `${globalState.player.init.toString()}|${globalState.player.isPlaying.toString()}` }</p>

      <button onClick={play} data-testid="idPlayButton">Play</button>

      { globalState.authenticated ? 
      <button onClick={logout} data-testid="idLogoutButton">Logout</button> : 
      <button onClick={login} data-testid="idLoginButton">Login</button>
      }
    </>
  )
}

export default App
