<template>
  <header>
    <!-- lg+ -->
    <div class="bg-gray-100 border-b border-gray-200 drop-shadow-2xl">
      <div class="px-4 mx-auto sm:px-6 lg:px-24">
        <nav class="relative flex items-center justify-between h-16 lg:h-20">
          <div class="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black uppercase"> Features </a>

            <a href="#" title="" class="text-base font-medium text-black uppercase"> Solutions </a>
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
          <button type="button"
            class="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden"
            id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <img class="w-10 h-10 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="Rounded avatar">
          </button>
          <!-- Dropdown menu -->
          <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                  out</a>
              </li>
            </ul>
          </div>



          <button data-collapse-toggle="navbar-default" type="button"
            class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div class="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black uppercase"> Sign up </a>

            <a href="#" title="" class="text-base font-medium text-black uppercase"> Sign in </a>

            <a href="#" title="" class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <a href="#" title="" class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full" id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
              <img class="w-10 h-10 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="Rounded avatar">
            </a>
             <!-- Dropdown menu -->
          <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                  out</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- xs to lg -->
      <div class="lg:hidden px-4 mx-auto sm:px-6 lg:px-8">

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
</header></template>