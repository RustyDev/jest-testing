import React, {Fragment} from "react"
import useGlobalHook from "./useGlobalHook"

const initialState = {
  authenticated: false
}

const actions = {
  login: (store) => {
    store.setState({ authenticated: true })
  },
  logout: (store) => {
    store.setState({ authenticated: false })
  }
}

const useGlobal = useGlobalHook(React, initialState, actions)

function App() {

  const [globalState, globalActions] = useGlobal()
  const login = () => globalActions.login()
  const logout = () => globalActions.logout()

  return (
    <>
      <button onClick={login} data-testid="idAuthenticated">
        { globalState.authenticated.toString() }
      </button>
      <button onClick={logout} data-testid="idNotAuthenticated">
        { globalState.authenticated.toString() }
      </button>
    </>
  )
}

export default App
