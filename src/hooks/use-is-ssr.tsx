import { useState, useEffect } from 'react';

export function useIsSsr() {
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    setIsSsr(false);
  }, []);

  return isSsr;
}
