import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"


export default function SlideContactUs() {
  return (
    <div id="contact-us" className={classNames(slideClass, 'flex flex-col mt-20 mb-40')} style={slideStyle}>
      <div className="flex flex-col mx-auto pt-10 pb-8 border border-main-white rounded" style={{ minWidth: '400px', width: '1000px'}}>

        <h2 className="text-center">Contact Us</h2>

        <form action="#" method="POST" className="flex flex-col px-20">

          <div className="mb-8">
            <label htmlFor="about" className="block text-xl font-medium text-main-white">
              About
            </label>
            <div className="mt-1 border-b border-main-gray">
              <input
                type="text"
                name="about"
                id="about"
                className="block w-full bg-main-bg border-0 focus:ring-0"
                placeholder="about"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="name" className="block text-xl font-medium text-main-white">
              Name
            </label>
            <div className="mt-1 border-b border-main-gray">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full bg-main-bg border-0 focus:ring-0"
                placeholder="name"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="phone" className="block text-xl font-medium text-main-white">
              Phone number
            </label>
            <div className="mt-1 border-b border-main-gray">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full bg-main-bg border-0 focus:ring-0"
                placeholder="+82 010-1234-5678"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-xl font-medium text-main-white">
              Email
            </label>
            <div className="mt-1 border-b border-main-gray">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full bg-main-bg border-0 focus:ring-0"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="description" className="block text-xl font-medium text-main-white">
              Description
            </label>
            <div className="mt-1">
              <textarea
                name="description"
                id="description"
                rows={3}
                className="block w-full bg-main-bg border-main-gray border-transparent focus:border-main-gray focus:ring-main-gray"
              />
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
  )
}
