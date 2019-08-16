import React from "react"
import useGlobalHook from "./useGlobalHook"

const initialState = {
  authenticated: false
}

const actions = {
  login: (store) => {
    store.setState({ authenticated: true })
  }
}

const useGlobal = useGlobalHook(React, initialState, actions)

function App() {

  const [globalState, globalActions] = useGlobal()
  const login = () => globalActions.login()

  return (
    <button onClick={login} data-testid="idAuthenticated">
      { globalState.authenticated.toString() }
    </button>
  )
}

export default App
