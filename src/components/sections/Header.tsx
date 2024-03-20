import { useSession, signIn } from 'next-auth/react';
import React, { useState } from 'react'
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { Button, Modal } from '../bases';
import { useScrollLock } from '@/hooks/useScrollLock';

type Props = {}

export const Header = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session, status } = useSession();

  useScrollLock(isModalOpen);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <header className="sticky top-0 flex justify-center">
      <nav className="w-4xl flex flex-row gap-4 justify-between items-baseline my-4 bg-slate-800 px-2 py-2 rounded-xl">
        <Button variant="custom">
          Tadarus Group
        </Button>
        <Button onClick={handleOpenModal}>Sign In</Button>
      </nav>
      {
        isModalOpen && (
          <Modal onClose={handleCloseModal} title="Log In to Tadarus Group">
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="custom" className="justify-start bg-red-500 hover:bg-red-400" onClick={() => signIn("google")}>
                <BsGoogle />
                Log In with Google
              </Button>
              <Button variant="custom" className="justify-start bg-slate-800 hover:bg-slate-700" onClick={() => signIn("google")}>
                <BsGithub />
                Log In with Github
              </Button>
            </div>
          </Modal>
        )
      }
    </header>
  )
}