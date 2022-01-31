import { Menu, RadioGroup, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { HiDesktopComputer, HiOutlineMoon, HiSun } from "react-icons/hi";

export const ThemeToggle = ({ themeSelected, setThemeSelected, changeTheme }) => {
  return (
    <Menu as="div" className="relative sm:pr-1">
      <motion.div whileTap={{ scale: 0.85 }}>
        <Menu.Button className="flex items-center justify-center p-2 text-4xl hover:bg-gray-200/60 dark:hover:bg-stone-800 rounded-xl focus:outline-none">
          {
            'theme' in localStorage === true ? (
              themeSelected === "dark" ? (
                <HiOutlineMoon className="w-6 h-6 text-pink-pantone-500"/>
              ) : (
                <HiSun className="w-6 h-6 text-yellow-500"/>
              )
            ) : (
              window.matchMedia('(prefers-color-scheme: dark)').matches === true ? (
                <HiOutlineMoon className="w-6 h-6 text-white" />
              ) : (
                <HiSun className="w-6 h-6 text-stone-800" />
              )
            )
          }
        </Menu.Button>
      </motion.div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-40 right-0 mt-2 origin-top-right bg-white rounded-lg shadow-lg focus:outline-none dark:bg-stone-900">
          <div className="bg-white border rounded-lg bg-opacity-10 dark:border-transparent">
            <div className="px-2.5 py-2">
              <Menu.Item as="div" className="focus:outline-none">
                <RadioGroup value={themeSelected} onChange={setThemeSelected} >
                  <div className="space-y-1.5 text-sm lg:text-base">
                    <RadioGroup.Option
                      value="light"
                    >
                      {
                        ({ checked }) => (
                          <button type="button" onClick={() => changeTheme("light")} className={`${checked ? 'bg-pink-pantone-500 text-white font-medium' : 'hover:bg-gray-200/60 dark:hover:bg-white dark:hover:bg-opacity-10'} w-full px-3 py-2 lg:py-1 focus:outline-none rounded-lg flex items-center justify-start space-x-2`}>
                            <div className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>
                              <HiSun className="w-5 h-5" />
                            </div>
                            <p className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>Claro</p>
                          </button>
                        )
                      }
                    </RadioGroup.Option>
                    <RadioGroup.Option
                      value="dark"
                    >
                      {
                        ({ checked }) => (
                          <button type="button" onClick={() => changeTheme("dark")} className={`${checked ? 'bg-pink-pantone-500 text-white font-medium' : 'hover:bg-gray-200/60 dark:hover:bg-white dark:hover:bg-opacity-10'} w-full px-3 py-2 lg:py-1 focus:outline-none rounded-lg flex items-center justify-start space-x-2`}>
                            <div className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>
                              <HiOutlineMoon className="w-5 h-5" />
                            </div>
                            <p className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>Oscuro</p>
                          </button>
                        )
                      }
                    </RadioGroup.Option>
                    <RadioGroup.Option
                      value="sys"
                    >
                      {
                        ({ checked }) => (
                          <button type="button" onClick={() => changeTheme("sys")} className={`${checked ? 'bg-pink-pantone-500 text-white font-medium' : 'hover:bg-gray-200/60 dark:hover:bg-white dark:hover:bg-opacity-10'} w-full px-3 py-2 lg:py-1 focus:outline-none rounded-lg flex items-center justify-start space-x-2`}>
                            <div className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>
                              <HiDesktopComputer className="w-5 h-5" />
                            </div>
                            <p className={`${checked ? 'text-white' : 'text-stone-700 dark:text-white'}`}>Sistema</p>
                          </button>
                        )
                      }
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
