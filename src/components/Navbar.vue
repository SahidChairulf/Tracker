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
          class="bg-[#435334] uppercase text-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#FAF1E4] rounded-box w-52">
          <RouterLink to="/">
            <li>
              <a>Homepage</a>
            </li>
          </RouterLink>
          <RouterLink to="/globe">
            <li>
              <a>Maps</a>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
    <div class="navbar-center relative w-max text-[#FAF1E4]">
      <a class="logo cursor-pointer normal-case text-xl" id="logo">MangRovin</a>
    </div>
    <div class="navbar-end text-[#FAF1E4]">
      <div class="search-container fixed mr-12">
        <form action="" class="w-max relative">
          <!-- ... (your input field and SVG) -->
          <input id="searchInput" type="text" autocomplete="off" v-model="input" @focus="toggleSearchContent(true)"
          @blur="toggleSearchContent(false)" placeholder="Search For Area"
          class="peer cursor-pointer ease-in-out duration-300 relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-64 focus:cursor-text focus:border-[#FAF1E4] focus:pl-16 focus:pr-4" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example" />

        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-[#FAF1E4] px-3.5 peer-focus:border-[#FAF1E4] peer-focus:stroke-[#FAF1E4]"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </form>
        <div v-if="showSearchContent && input.trim() !== ''" class="fixed items-center justify-center text-center">
          <!-- ... (search content) -->
          <div class="area location items-center justify-center text-center" v-for="area in filteredList" :key="area">
            <p class="text-center justify-center items-center">{{ area }}</p>
          </div>
          <div class="area error" v-if="input && filteredList.length === 0">
            <p>Area not found</p>
          </div>
        </div>
      </div>
      <button class="btn btn-ghost btn-circle" id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation">
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
      <div v-if="currentUser" id="dropdownInformation"
        class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-max px-3 p-3 dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{{ currentUser.username }}</div>
          <div class="font-medium truncate">{{ currentUser.email }}</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li v-if="currentUser">
            <router-link :to="{ name: 'User' }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">User Board</router-link>
          </li>
          <li v-if="showAdminBoard">
            <a href="https://greengrosir.vercel.app/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin Board</a>
          </li>
          <li v-if="showModeratorBoard">
            <router-link :to="{ name: 'Morderator' }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Moderator Board</router-link>
          </li>
        </ul>
        <div class="py-2">
          <button @click.prevent="logOut" type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">LogOut</button>
        </div>
      </div>
      <div v-else id="dropdownInformation"
        class="hidden mr-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-max px-3 p-3 dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div class="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
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
        </ul>
        <div class="py-2">
          <RouterLink to="/login">
            <button type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">LogIn</button>
          </RouterLink>
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
  color: #FAF1E4;
  background-color: transparent;
  z-index: 1000;
}

.BgColour {
  color: #435334;
  transition: all 1s;
  background-color: #435334;
  border-bottom: 1px solid #435334;
}

.hidden {
  display: none;
}

@media (max-width: 768px) {
  .logo.hidden {
    display: none;
  }
}

</style>
<script>
export default {
  data() {
    return {
      showSearchContent: false,
      input: "",
      areas: [
        "Sundarbans, India",
        "Everglades, Amerika Serika",
        "Great Barrier Reef, Australia",
        "Bali, Indonesia",
        "Mangroves of Kenya"
      ],
    };
  },
  methods: {
    scrollValue() {
      var navbar = document.getElementById('navbar');
      var scroll = window.scrollY;
      if (scroll < 50) {
        navbar.classList.remove('BgColour');
      } else {
        navbar.classList.add('BgColour');
      }
    },
    toggleLogo(show) {
      var logo = document.getElementById('logo');
      var isMobile = window.innerWidth <= 768;
      if (isMobile) {
        logo.classList.toggle('hidden', !show);
      } else {
        logo.classList.toggle('hidden', false);
      }
    },
    toggleSearchContent(show) {
      this.showSearchContent = show;
    },

    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      // Add a click event listener to the search input
      var searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('click', () => {
        this.toggleLogo(false); // Show the logo when search input is clicked
      });

      // Add a blur event listener to the search input
      searchInput.addEventListener('blur', () => {
        this.toggleLogo(true); // Hide the logo when search input loses focus
      });

      window.addEventListener('scroll', this.scrollValue);
      window.addEventListener('resize', () => {
        this.toggleLogo(true); // Hide the logo on resize
      });
    });
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    },


    filteredList() {
      return this.areas.filter((area) =>
        area.toLowerCase().startsWith(this.input.toLowerCase())
      );
    },
  },
};

</script>