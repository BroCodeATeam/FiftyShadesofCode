<template>
  <div
      class='fixed w-full h-[80px] flex justify-between items-center px-4  shadow-md shadow-black z-10 text-white drop-shadow-md shadow-black z-10 bg-gradient-to-t from-zinc-900 to-red-700' >
<!--    Navbar-->
    <nav
        class='container px-6 mx-auto md:flex md: justify-between md:items-center' >
      <div class='flex items-center justify-between' >
        <div class='relative' >
          <img src='../assets/FiftyShadesofCode.png' alt='Fifty Shades of Code text' />
        </div>
<!--        Mobile menu button-->
        <div @click='showMenu = !showMenu' class='flex md:hidden'>
          <button type='button' class='text-white hover:text-white focus:outline-none focus:text-white'>
            <svg viewBox='0 0 24 24' class='w-6 h-6 fill-current' >
              <path fill-rule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
          class='flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-100 md:mt-0'>
        <li class='menu-button'><a href='#'>Home</a></li>
        <li class='menu-button'><a href='#about' v-smooth-scroll>About</a></li>
        <li class='menu-button'><a href='#skills' v-smooth-scroll>Skills</a></li>
        <li class='menu-button'><a href='#work' v-smooth-scroll>Work</a></li>
        <li class='menu-button'><a href='#contact' v-smooth-scroll>Contact</a></li>
      </ul>
    </nav>
<!--    End Navbar-->
    <div class='flex items-center' >
      <div class='w-11/12 space-y-5 md:space-y-10' >

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showMenu: false,
      }
    }
  }
</script>

<style>

</style>