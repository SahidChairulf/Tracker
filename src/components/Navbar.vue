<template>
  <div class="navbar scroll-smooth fixed w-screen top-0" id="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle text-[#FAF1E4]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0"
          class="bg-[#9EB384] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black rounded-box w-52">
          <RouterLink to="/">
            <li><a>Homepage</a></li>
          </RouterLink>
          <li>
            <a>User</a>
          </li>
          <li id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right">
            <a>Tracking
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
          <li>
          </li>
        </ul>
      </div>
      <!-- Dropdown menu -->
      <div id="dropdownRight"
        class="z-10 hidden bg-[#9EB384] menu menu-sm dropdown-content divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-black z-[1] dark:text-gray-200" aria-labelledby="dropdownRightButton">
          <RouterLink to="/maps">
            <li>
              <a href="#" class="block px-4 py-2">Tracking Maps</a>
            </li>
          </RouterLink>
          <li>
            <a href="#" class="block px-4 py-2">Maps Detail</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-[#435334] dark:hover:bg-gray-600 dark:hover:text-white">Sign
              out</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-center text-[#FAF1E4]">
      <a class="logo btn btn-ghost normal-case text-xl">MangRovin</a>
    </div>
    <div class="navbar-end text-[#FAF1E4]">
      <form action="" class="relative w-max">
        <input type="search"
          class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-[#FAF1E4] px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      <button class="btn btn-ghost btn-circle" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person"
            viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <span class="badge badge-xs badge-danger indicator-item"></span>
        </div>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownAvatar"
        class="z-10 hidden bg-[#9EB384] menu menu-sm dropdown-content divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div class="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li>
            <a href="#"
              class="block px-4 py-2">Dashboard</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2">Earnings</a>
          </li>
        </ul>
        <div class="py-2">
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
            out</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@600&display=swap');

.logo {
  font-family: 'Merienda', cursive;
}

.navbar {
  color: black;
  background-color: transparent;
  z-index: 1000;
}

.BgColour {
  color: #435334;
  transition: all 1s;
  background-color: #435334;
  border-bottom: 1px solid #435334;
}
</style>
<script>
import { RouterLink } from 'vue-router';

function scrollValue() {
  var navbar = document.getElementById('navbar');
  var scroll = window.scrollY;
  if (scroll < 50) {
    navbar.classList.remove('BgColour');
  } else {
    navbar.classList.add('BgColour');
  }
}

window.addEventListener('scroll', scrollValue);
</script>