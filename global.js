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
      <p data-testid="idAuthenticated">{ globalState.authenticated.toString() }</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default App
