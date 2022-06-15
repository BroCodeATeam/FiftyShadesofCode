<template>
  <div class='w-full h-screen m-auto bg-gradient-to-t from-zinc-700 to-zinc-900' id='home' >
    <div class='max-w-[1200px] mx-auto px-2 flex flex-row justify-center h-screen' >
      <img src='../assets/Logo.gif' alt='Dragon with Tie'
           class='w-[700px] h-[1000px] md:w-[300px] md:h-[500px] md:mt-[150px] mt-[150px] sm:w-[75px] sm:h-[150px] sm:mt-[300px] sm:block md:block' />

<!--      Container-->
      <div class='max-w-[1200px] mx-auto flex flex-col justify-center h-full'>
        <p
            class='text-white text-2xl md:text-xl sm:text-sm text-center font-sans-serif'>Hello! I am</p>
        <h1
            class='text-4xl md:text-3xl sm:text-xl font-bold text-center text-zinc-300 drop-shadow-[2px_2px_2px_rgba(0,0,0)]'> <a
            href='https://www.linkedin.com/fiftyshadesofcode/' target='_blank'
            class='text-zinc-500 3xl:text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm hover:underline'>Philip R. McDavid</a>
        </h1>
        <h2 class='text-4xl md:text-2xl sm:text-sm py-4 font-bold text-center text-neutral-500 drop-shadow-[2px_1px_1px_rgba(0,0,0)]' >
            I'm a Full Stack Developer
          </h2>
        <p class='text-red-700 drop-shadow-[2px_1px_1px_rgba(0,0,0)] text-center max-2-[700px] md:text-[17px] sm:text-[17px]' >
            I’m a full-stack developer specializing in building<br /> and designing
            exceptional digital experiences.<br />Currently, I’m focused on
            building responsive<br />full-stack web applications.
        </p>

        <div class='mt-16 md:flex gap-1 md:gap-10' >
          <button
              class='text-zinc-800 bg-zinc-500 hidden md:block hover:bg-gradient-to-t from-zinc-900 to-red-700 p-2' >
            View My Work
          </button>
          <button
              class='text-zinc-500 border-2 border-zinc-500 mb-5 md:mb-0 hover:bg-gradient-to-t from-zinc-900 to-red-700 hover:text-white hover:border-white p-1.5' >
            Contact Me
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>

</style>