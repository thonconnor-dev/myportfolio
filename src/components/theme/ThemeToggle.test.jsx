import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import * as ThemeContextModule from '../../context/ThemeContext';

// Mock the useTheme hook
vi.mock('../../context/ThemeContext', () => ({
  useTheme: vi.fn(),
  ThemeProvider: ({ children }) => <>{children}</>
}));

describe('ThemeToggle', () => {
  it('renders correctly in dark mode', () => {
    // Setup mock return value for useTheme
    const toggleTheme = vi.fn();
    vi.mocked(ThemeContextModule.useTheme).mockReturnValue({ 
      isDark: true, 
      toggleTheme 
    });
    
    const { container } = render(<ThemeToggle />);
    
    // Create a snapshot for dark mode
    expect(container).toMatchSnapshot();
    
    // Additional assertions for specific elements
    const button = screen.getByRole('button', { name: /switch to light mode/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('bg-gray-800');
    expect(button.className).toContain('text-white');
    
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    const path = svg.querySelector('path');
    expect(path.getAttribute('d')).toContain('M12 3v1m0 16v1m9-9h-1M4 12H3m15.364');
  });
  
  it('renders correctly in light mode', () => {
    // Setup mock return value for useTheme
    const toggleTheme = vi.fn();
    vi.mocked(ThemeContextModule.useTheme).mockReturnValue({ 
      isDark: false, 
      toggleTheme 
    });
    
    const { container } = render(<ThemeToggle />);
    
    // Create a snapshot for light mode
    expect(container).toMatchSnapshot();
    
    // Additional assertions for specific elements
    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('bg-gray-200');
    expect(button.className).toContain('text-gray-800');
    
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    const path = svg.querySelector('path');
    expect(path.getAttribute('d')).toContain('M20.354 15.354A9 9 0 018.646 3.646');
  });
  
  it('calls toggleTheme when clicked', () => {
    // Setup mock return value for useTheme
    const toggleTheme = vi.fn();
    vi.mocked(ThemeContextModule.useTheme).mockReturnValue({ 
      isDark: true, 
      toggleTheme 
    });
    
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});