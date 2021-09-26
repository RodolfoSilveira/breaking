/* eslint-disable @typescript-eslint/no-empty-function */
import { screen, render } from '@testing-library/react';
import Modal from '.'

const character = {
  char_id: 1,
  name: 'teste',
  birthday: '',
  occupation: ['teste'],
  img: 'teste',
  status: 'teste',
  nickname: 'teste',
  appearance: [],
  portrayed: 'teste',
  category: 'teste',
  better_call_saul_appearance: [],
}

describe('<Modal />', () => {
  it('should render a Modal', () => {
    const { container } = render(<Modal
      character={character}
      closedModal={() => {}}
    />)

    expect(screen.getByText(/unknown/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
});
