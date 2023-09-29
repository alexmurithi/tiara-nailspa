/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import Image from '@components/Image'
import BackgroundImage from '@images/desktop/background.jpg'

describe('<Image/>', () => {
  it('renders an image', async () => {
    // ARRANGE
    const { getByAltText } = render(
      <Image src={BackgroundImage} alt="Taiara Nail Spa" />,
    )
    // ACT
    const imageElement = getByAltText('Taiara Nail Spa')
    // ASSERT
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', BackgroundImage)
  })
})
