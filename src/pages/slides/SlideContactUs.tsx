import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"
import { useForm } from 'react-hook-form'
import emailJs from '@emailjs/browser'

export default function SlideContactUs() {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    emailJs.send('service_ql040f8', 'template_dyhwjl3', {
        ...data,
      })
      .then(function(response) {
        setOpen(true)
      }, function(error) {
        alert(error)
        console.error(error)
      });
  }

  return (
    <>
      <div id="contact-us" className={classNames(slideClass, 'flex flex-col mt-20 mb-40')} style={slideStyle}>
        <div className="flex flex-col mx-auto pt-10 pb-8 border border-main-white rounded" style={{ minWidth: '400px', width: '1000px'}}>

          <h2 className="text-center">Contact Us</h2>

          <form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-20">

            <div className="mb-8">
              <label htmlFor="about" className="block text-xl font-medium text-main-white">
                About
              </label>
              <div className="mt-1 border-b border-main-gray">
                <input
                  type="text"
                  id="about"
                  className="block w-full bg-main-bg border-0 focus:ring-0"
                  placeholder="about"
                  {...register('about', { required: 'required' })}
                />
              </div>
              <div className="mt-2 pl-2 text-red-600">
                {errors?.about?.message as string}
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="name" className="block text-xl font-medium text-main-white">
                Name
              </label>
              <div className="mt-1 border-b border-main-gray">
                <input
                  type="text"
                  id="name"
                  className="block w-full bg-main-bg border-0 focus:ring-0"
                  placeholder="name"
                  {...register('name', { required: 'required' })}
                />
              </div>
              <div className="mt-2 pl-2 text-red-600">
                {errors?.name?.message as string}
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="phone" className="block text-xl font-medium text-main-white">
                Phone number
              </label>
              <div className="mt-1 border-b border-main-gray">
                <input
                  type="text"
                  id="phone"
                  className="block w-full bg-main-bg border-0 focus:ring-0"
                  placeholder="+82 010-1234-5678"
                  {...register('phone', { required: 'required' })}
                />
              </div>
              <div className="mt-2 pl-2 text-red-600">
                {errors?.phone?.message as string}
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-xl font-medium text-main-white">
                Email
              </label>
              <div className="mt-1 border-b border-main-gray">
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-main-bg border-0 focus:ring-0"
                  placeholder="example@mail.com"
                  {...register('email', { required: 'required' })}
                />
              </div>
              <div className="mt-2 pl-2 text-red-600">
                {errors?.email?.message as string}
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="description" className="block text-xl font-medium text-main-white">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  rows={3}
                  className="block w-full bg-main-bg border-main-gray focus:border-main-gray focus:ring-main-gray"
                  {...register('description', { required: 'required' })}
                />
              </div>
              <div className="mt-2 pl-2 text-red-600">
                {errors?.description?.message as string}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-fit items-center rounded border border-gray-300 bg-main-bg px-6 py-2 text-2xl text-main-white hover:bg-main-gray"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Sending successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          We will reply you soon!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
