import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import { Banner } from '.'

const props = {
  img: 'https://cdn1.epicgames.com/1b8a504ec52d4430b65cca2990ad6c7f/offer/EGS_Crashlands_ButterscotchShenanigans_S1-2560x1440-2971f9f3be6e0b5b7e69818577240f54.jpg',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Play the new CrashLands season/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /Defy death/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
