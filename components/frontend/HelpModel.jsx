
"use client";
import { HelpCircle} from 'lucide-react';
import Link from 'next/link';
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 text-green-600 dark:text-slate-100'>
        <HelpCircle />
        <span>Help</span>
    </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Need Help Talk to our Help Desk</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2">
            {/* <Link className=''>
            <HelpCircle />
            <span>Help</span>
            </Link> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
