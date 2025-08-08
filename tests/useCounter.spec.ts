import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should initialize with count = 0 and val = 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });

  it('should allow updating val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    expect(result.current.val).toBe(3);
  });
});