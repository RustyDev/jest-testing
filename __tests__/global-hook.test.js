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

  const login = getByTestId(container, "idAuthenticated")
  const logout = getByTestId(container, "idNotAuthenticated")

  expect(login.textContent).toBe("false")

  fireEvent.click(login)
  expect(login.textContent).toBe("true")

  fireEvent.click(logout)
  expect(login.textContent).toBe("false")
})

