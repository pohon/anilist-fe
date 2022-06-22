import "@testing-library/jest-dom/extend-expect";

window.scrollTo = jest.fn()
window.IntersectionObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn()
}))
global.fetch = jest.fn()