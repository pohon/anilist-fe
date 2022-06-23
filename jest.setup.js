const observerMock = function () {
  return {
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }
}

window.scrollTo = jest.fn()
window.IntersectionObserver = observerMock
global.fetch = jest.fn()