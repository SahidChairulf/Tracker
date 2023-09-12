<template>
  <header>
    <!-- lg+ -->
    <div class="bg-gray-100 border-b border-gray-200">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <nav class="relative flex items-center justify-between h-16 lg:h-20">
          <div class="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black"> Features </a>

            <a href="#" title="" class="text-base font-medium text-black"> Solutions </a>

            <a href="#" title="" class="text-base font-medium text-black"> Resources </a>

            <a href="#" title="" class="text-base font-medium text-black"> Pricing </a>
          </div>

          <div class="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt="" />
              </a>
            </div>
          </div>

          <button type="button"
            class="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <button data-collapse-toggle="navbar-default" type="button"
            class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div class="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black"> Sign up </a>

            <a href="#" title="" class="text-base font-medium text-black"> Sign in </a>

            <a href="#" title="" class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <div class="flex items-center md:order-2">

              <button type="button"
                class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
              </button>
              <!-- Dropdown menu -->
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown">
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                      out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="navbar-user" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- xs to lg -->
    <nav class="py-4 bg-white lg:hidden">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">

        <div class="mt-6" id="navbar-default">
          <div class="flex flex-col space-y-2">
            <a href="#" title=""
              class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

          <a href="#" title=""
            class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions
          </a>

          <a href="#" title=""
            class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources
          </a>

          <a href="#" title=""
            class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
        </div>

        <hr class="my-4 border-gray-200" />

        <div class="flex flex-col space-y-2">
          <a href="#" title=""
            class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </a>

          <a href="#" title=""
            class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </a>
        </div>
      </div>
    </div>
  </nav>
</header></template>