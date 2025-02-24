import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Vehicle Info', href: '#', current: false },
  { name: 'Insurance', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
  { name: 'More', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="data:image/jpeg;base64,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"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-400 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
