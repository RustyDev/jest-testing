import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent, getByTestId } from "@testing-library/react"
import App from "../global"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("App loads with initial state of logged out", () => {

  const { container } = render(<App />)
  const countValue = getByTestId(container, "idAuthenticated")

  expect(countValue.textContent).toBe("false")
})

it("Authenticate buttons should work", () => {
  const { container } = render(<App />)

  const authenticated = getByTestId(container, "idAuthenticated")
  const login = getByTestId(container, "idLoginButton")

  expect(authenticated.textContent).toBe("false")

  fireEvent.click(login)
  expect(authenticated.textContent).toBe("true")

  const logout = getByTestId(container, "idLogoutButton")

  fireEvent.click(logout)
  expect(authenticated.textContent).toBe("false")
})

it("Play button should init player", () => {
  const { container } = render(<App />)

  const playerStatus = getByTestId(container, "idPlayerStatus")
  const playButton = getByTestId(container, "idPlayButton")

  expect(playerStatus.textContent).toBe("false|false")

  fireEvent.click(playButton)
  expect(playerStatus.textContent).toBe("true|true")

})

