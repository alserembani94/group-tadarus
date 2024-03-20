// Hook to lock the scroll when a modal is open

import { useEffect } from 'react';

export const useScrollLock = (isModalOpen: boolean) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);
};