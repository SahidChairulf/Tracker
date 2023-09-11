<template>
  <nav class="bg-white top-0 z-100 w-full px-10 border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
        <img class="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
      </a>
      <div class="flex items-center md:order-2">
        <button type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full"
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671138.jpg?w=1060&t=st=1694410065~exp=1694410665~hmac=78c7ed03d7593a795e9c5eaee0efc2c6ceeb8e75ed0b60f1ff342ea90df44834"
            alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:divide-gray-600"
          id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-black dark:text-black">Bonnie Green</span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Dashboard</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Settings</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Earnings</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Sign
                out</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="navbar-user" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
          aria-controls="navbar-user" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-900">
          <RouterLink to="/">
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-bold text-black rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-[#4CAF4F] md:p-0 dark:text-black md:dark:hover:text[#4CAF4F] dark:hover:bg-gray-900 dark:hover:text-black md:dark:hover:bg-white dark:border-gray-900 uppercase"
              aria-current="page">Home</a>
          </li>
        </RouterLink>
        <RouterLink to="/maps">
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-bold text-black rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-[#4CAF4F] md:p-0 dark:text-black md:dark:hover:text[#4CAF4F] dark:hover:bg-gray-900 dark:hover:text-black md:dark:hover:bg-white dark:border-gray-900 uppercase">Tracker</a>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</nav></template>