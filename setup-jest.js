beforeAll(() => {
  window.scrollTo = jest.fn()
})

afterAll(() => {
  jest.resetAllMocks()
})