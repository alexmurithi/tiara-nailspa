/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material'
import theme from '@themes/Default'
import Home from '@pages/Home'

describe('<Home/>', () => {
  it('renders corretly without crashing', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
