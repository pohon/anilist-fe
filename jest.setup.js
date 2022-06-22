window.scrollTo = jest.fn()
window.IntersectionObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn()
}))
global.fetch = jest.fn()