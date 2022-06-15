<template>
  <div id='about' class='w-full h-screen bg-gradient-to-t from-zinc-900 to-zinc-700 text-[#ffffff]'>
    <div class='flex flex-col justify-center items-center w-full h-full'>
      <div class='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div class=' text-center sm:text-right pb-8 pl-4'>
          <p class='text-4xl text-center font-bold inline border-b-4 border-red-700'>
            About
          </p>
        </div>
        <div></div>
      </div>
      <div class='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div class='sm:text-right text-2xl md:text-xl sm:text-[17px] font-bold'>
          <p>I am Philip R. McDavid,<br />or 'Fifty Shades of Code'<br />as many know me.</p>
        </div>
        <div class='sm:text-left sm:text-[15px]'>
          <p>I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. What would you do if you had
            a software expert available at your fingertips?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style>

</style>