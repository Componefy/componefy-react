import React from 'react';
import { render } from '@testing-library/react';

import Test from './TestComponent';

describe('Test', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test />);
    expect(baseElement).toBeTruthy();
  });
});
