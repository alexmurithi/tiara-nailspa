/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'
import Loader from '@components/Loader'
import { ThemeProvider } from '@mui/material'
import theme from '@themes/Default'

describe('<Loader/>', () => {
  it('renders loader without crashing', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Loader />
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
