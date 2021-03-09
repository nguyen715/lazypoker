import { render, screen } from '@testing-library/react';
import Table from './Table.js';

describe('Table', () => {
  test('renders Table component', () => {
    render(<Table />);
    screen.debug();
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
});