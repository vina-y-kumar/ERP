/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pYeSFxBavrV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
// import { button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <>
      <div className="bg-gray-50/90 border-b border-gray-200 border-gray-200 dark:bg-gray-950 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between h-[60px]">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
                <LayoutGridIcon className="w-6 h-6" />
                <span className="font-bold text-xl tracking-tighter">ERP</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                className="flex items-center p-3 rounded-md text-sm font-medium hover:bg-gray-900/10 dark:hover:bg-gray-50/10"
                href="#"
              >
                Dashboard
              </Link>
              <Link
                className="flex items-center p-3 rounded-md text-sm font-medium hover:bg-gray-900/10 dark:hover:bg-gray-50/10"
                href="#"
              >
                Order Management
              </Link>
              <Link
                className="flex items-center p-3 rounded-md text-sm font-medium hover:bg-gray-900/10 dark:hover:bg-gray-50/10"
                href="#"
              >
                Product Management
              </Link>
            </div>
            <div className="flex md:hidden">
              <button size="icon" variant="icon">
                <SearchIcon className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </button>
            </div>
            <div className="flex md:hidden">
              <button size="icon" variant="icon">
                <BellIcon className="w-4 h-4" />
                <span className="sr-only">Notifications</span>
              </button>
            </div>
            <div className="flex md:hidden">
              <button size="icon" variant="icon">
                <ChevronRightIcon className="w-4 h-4" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <header className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Welcome to Acme ERP</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for managing your enterprise resources. From order processing to inventory
              management, we've got you covered.
            </p>
          </div>
        </div>
      </header>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your ERP. Your Way.</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              With a customizable and intuitive interface, you can streamline your operations and focus on growth.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full border-t border-gray-200 border-gray-200 dark:border-gray-800">
        <div className="container grid max-w-6xl items-start gap-12 px-4 md:px-6 py-12 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Actionable Insights</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Make informed decisions with real-time data. Our dashboard provides a comprehensive view of your
                business performance.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Track sales and revenue trends</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Monitor inventory levels</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Identify customer insights</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Image"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="335"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="w-full border-t border-gray-200 border-gray-200 dark:border-gray-800">
        <div className="container grid max-w-6xl items-start gap-12 px-4 md:px-6 py-12 lg:grid-cols-2 lg:py-24">
          <div className="flex items-center justify-center">
            <img
              alt="Image"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="335"
              src="/placeholder.svg"
              width="600"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seamless Order Management</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform simplifies the order management process, allowing you to efficiently process orders and
                delight customers.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Efficient order processing</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Customer order tracking</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Integrated customer management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full border-t border-gray-200 border-gray-200 dark:border-gray-800">
        <div className="container grid max-w-6xl items-start gap-12 px-4 md:px-6 py-12 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Efficient Product Management</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Manage your product catalog with ease. Our platform provides the tools for effective product management
                and inventory control.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Centralized product catalog</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Inventory tracking and management</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Flexible pricing management</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Image"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="335"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section>
      <footer className="py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-6xl items-start gap-4 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Ready to get started?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Contact our sales team to learn more about the Acme ERP platform and how it can transform your business.
            </p>
          </div>
          {/* <form className="grid max-w-sm gap-4 md:grid-cols-2">
            <Input placeholder="Enter your email" required type="email" />
            <button size="sm" type="submit">
              Contact Sales
            </button>
          </form> */}
        </div>
      </footer>
    </>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
