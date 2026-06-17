// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiBase title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiBase/i);
    expect(titleElement).toBeInTheDocument();
});
