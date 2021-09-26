/* eslint-disable @typescript-eslint/no-empty-function */
import { screen, render } from '@testing-library/react';
import Card from '.'

describe('<Card />', () => {
  it('should render a card', () => {
    const { container } = render(<Card
      name="teste"
      nickname=""
      img="teste"
      handleClick={() => {}}
      char_id={1}
    />)

    expect(screen.getByText(/unknown/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
});
