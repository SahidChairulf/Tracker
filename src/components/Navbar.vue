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
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
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
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="badge badge-xs badge-danger indicator-item"></span>
        </div>
      </button>
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
}

.BgColour {
  color: #435334;
  transition: all 1s;
  background-color: #435334;
  border-bottom: 1px solid #435334;
}
</style>
<script>
function scrollValue() {
  var navbar = document.getElementById('navbar');
  var scroll = window.scrollY;
  if (scroll < 200) {
    navbar.classList.remove('BgColour');
  } else {
    navbar.classList.add('BgColour');
  }
}

window.addEventListener('scroll', scrollValue);
</script>