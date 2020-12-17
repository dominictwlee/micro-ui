import React from 'react';

import Text from './Text';
import { render, screen } from '../utils/testUtils';

function Variants() {
  return (
    <div>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'p1'].map(el => (
        <Text key={el} variant={el as any}>
          {el}
        </Text>
      ))}
    </div>
  );
}

describe('Text', () => {
  test('render with children', () => {
    render(<Text>hello world</Text>);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  test('render different variants', () => {
    const { container } = render(<Variants />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
