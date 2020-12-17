import React from 'react';

import Card from '.';
import { render, screen } from '../utils/testUtils';

describe('Card', () => {
  test('render with children', () => {
    render(
      <Card>
        <h1>hello world</h1>
      </Card>
    );

    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  test('render with default styles', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
