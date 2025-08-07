import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../src/hooks/features/homepage/useCounter';

describe('useCounter Hook', () => {
  it('should initialize with default value of 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize with custom initial value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(1));
    
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });

  it('should reset counter to initial value', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });

  it('should not allow counter to go below 0', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });
});