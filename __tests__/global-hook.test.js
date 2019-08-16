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

it("Authenticate button should work", () => {
  const { container } = render(<App />)
  const login = getByTestId(container, "idAuthenticated")
  expect(login.textContent).toBe("false")
  fireEvent.click(login)
  expect(login.textContent).toBe("true")
})

