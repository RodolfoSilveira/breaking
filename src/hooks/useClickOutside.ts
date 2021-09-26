/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

export function useClickOutside(ref: any, element: any): void {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        element();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [element, ref]);
}
