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
                placeholder="010-1234-5678"
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


// export default function Example() {
//
//   return (
//     <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mt-12">
//           <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//             <div>
//               <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                 Last name
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                 Company
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   name="company"
//                   id="company"
//                   autoComplete="organization"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <div className="relative mt-1 rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 flex items-center">
//                   <label htmlFor="country" className="sr-only">
//                     Country
//                   </label>
//                   <select
//                     id="country"
//                     name="country"
//                     className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
//                   >
//                     <option>US</option>
//                     <option>CA</option>
//                     <option>EU</option>
//                   </select>
//                 </div>
//                 <input
//                   type="text"
//                   name="phone-number"
//                   id="phone-number"
//                   autoComplete="tel"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="+1 (555) 987-6543"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <div className="mt-1">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   defaultValue={''}
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <Switch
//                     checked={agreed}
//                     onChange={setAgreed}
//                     className={classNames(
//                       agreed ? 'bg-indigo-600' : 'bg-gray-200',
//                       'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
//                     )}
//                   >
//                     <span className="sr-only">Agree to policies</span>
//                     <span
//                       aria-hidden="true"
//                       className={classNames(
//                         agreed ? 'translate-x-5' : 'translate-x-0',
//                         'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
//                       )}
//                     />
//                   </Switch>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-base text-gray-500">
//                     By selecting this, you agree to the{' '}
//                     <a href="#" className="font-medium text-gray-700 underline">
//                       Privacy Policy
//                     </a>{' '}
//                     and{' '}
//                     <a href="#" className="font-medium text-gray-700 underline">
//                       Cookie Policy
//                     </a>
//                     .
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <button
//                 type="submit"
//                 className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Let's talk
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
