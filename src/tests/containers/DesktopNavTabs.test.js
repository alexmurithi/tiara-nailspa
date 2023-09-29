/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import renderer from 'react-test-renderer'
import DesktopNavTabs from '@containers/Header/DesktopNavTabs'
import { ThemeProvider } from '@mui/material'
import theme from '@themes/Default'

describe('<DesktopNavTabs/>', () => {
  it('renders correctly without crashing', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <DesktopNavTabs />
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
