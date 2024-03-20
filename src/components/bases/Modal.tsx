// Modal and create new portal for modal
// with dark background and close button

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
  title: string;
  variant?: "small" | "medium" | "large";
  onClose: () => void;
};

export const Modal = ({ children, title, variant = "small", onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 min-h-screen w-full bg-[#00000055] flex items-center justify-center">
      <div data-variant={variant} className="bg-slate-800 p-4 rounded-lg flex flex-col gap-2 data-[variant=small]:max-w-sm data-[variant=medium]:max-w-md data-[variant=large]:max-w-lg text-slate-300">
        <div className="flex flex-row justify-between gap-12">
          <h1 className="text-xl font-bold">{title}</h1>
          <button className="text-xl cursor-pointer" onClick={onClose}>&times;</button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
