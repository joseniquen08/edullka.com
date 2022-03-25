import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineX } from 'react-icons/hi';

export const ModalLogin = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment} >
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-500/50 font-poppins"
        onClose={closeModal}
      >
        <div className="min-h-screen px-2.5 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="px-6 pt-8 pb-6 space-y-3 bg-white md:px-8 md:pt-10 md:pb-10 bg-gradient-to-r from-gray-50 to-gray-50/95">
                <div className="space-y-4 md:col-span-1 md:space-y-5 md:px-3">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium tracking-tight leading-6 text-gray-900 md:text-3xl"
                  >
                    ¡Bienvenido Edullker!
                  </Dialog.Title>
                </div>
              </div>
              <div className="absolute md:hidden top-6 right-5">
                <button onClick={closeModal} type="button" className="focus:outline-none bg-gray-200/80 rounded-full p-1.5">
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
