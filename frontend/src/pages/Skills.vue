<template>
  <div id='skills' class='w-full h-full bg-gradient-to-t from-zinc-700 to-zinc-900 text-[#ffffff] py-20 lg:w-full lg:h-full sm:inset-0'>
<!--    Container-->
    <div class='max-w-full mx-auto p-6 flex flex-col justify-center text-center w-full h-full'>
      <div>
        <p class='text-4xl font-bold inline border-b-4 border-red-700 '>Skills</p>
        <p class='py-4'>These are the technologies I've worked with</p>
      </div>

      <div class='w-full grid grid-cols-1 md:grid-cols-5 md:py-0 sm:grid-cols-1 gap-4 text-center py-8'>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 py-4 hover:scale-110 duration-500'>
          <img class='w-[175px] mx-auto' src='../assets/skills/HTML.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>HTML</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-2 md:py-3 py-2 hover:scale-110 duration-500'>
          <img class='w-[200px] mx-auto' src='../assets/skills/CSS.png' alt="HTML icon" />
          <p class='md:text-sm'>CSS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] py-4 md:px-2 md:py-0 hover:scale-110 duration-500'>
          <img class='w-[150px] mx-auto mt-6' src='../assets/skills/TailwindCSS.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>TAILWIND CSS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-3 py-6 hover:scale-110 duration-500'>
          <img class='w-[165px] mx-auto' src='../assets/skills/Javascript.png' alt="HTML icon" />
          <p class='mt-4 lg:text-md md:text-sm'>JAVASCRIPT</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-5 py-8 hover:scale-110 duration-500'>
          <img class='w-[175px] mx-auto' src='../assets/skills/ReactJS.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>REACTJS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-5 py-8 hover:scale-110 duration-500'>
          <img class='w-[175px] mx-auto' src='../assets/skills/VueJS.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>VUEJS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 py-5 hover:scale-110 duration-500'>
          <img class='w-[165px] mx-auto mt-4' src='../assets/skills/ViteJS.png' alt="HTML icon" />
          <p class='md:text-sm'>VITEJS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-5 py-14 hover:scale-110 duration-500'>
          <img class='w-[200px] mx-auto mt-4' src='../assets/skills/NextJS.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>NEXTJS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 py-12 hover:scale-110 duration-500'>
          <img class='w-[150px] mx-auto mt-6' src='../assets/skills/GitHub.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>GITHUB</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-1 py-9 hover:scale-110 duration-500'>
          <img class='w-[200px] mx-auto' src='../assets/skills/NodeJS.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>NODE JS</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 py-8 hover:scale-110 duration-500'>
          <img class='w-[165px] mx-auto' src='../assets/skills/MongoDB.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>MONGODB</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 py-2 hover:scale-110 duration-500'>
          <img class='w-[200px] mx-auto' src='../assets/skills/PostgreSQL.png' alt="HTML icon" />
          <p class='md:text-[10px]'>POSTGRESQL</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 py-6 hover:scale-110 duration-500'>
          <img class='w-[150px] mx-auto mt-3' src='../assets/skills/MySQL.png' alt="HTML icon" />
          <p class='mt-4 md:text-sm'>MYSQL</p>
        </div>
        <div class='shadow-lg shadow-[#A01C1C] md:px-4 md:py-0 p-2 py-auto hover:scale-110 duration-500'>
          <img class='w-[200px] mx-auto' src='../assets/skills/Firebase.png' alt="HTML icon" />
          <p class='md:text-sm mb-2'>FIREBASE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skills'
  }
</script>

<style>

</style>