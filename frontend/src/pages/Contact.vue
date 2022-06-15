<template>
  <div id='contact'
       class='w-full h-screen bg-gradient-to-t from-zinc-700 to-zinc-900 text-white flex justify-center text-center  items-center p-4'>
    <form method='POST' action="https://getform.io/f/23706447-711c-4993-b6b5-861d10a543a7"
          class='flex flex-col max-w-[600px] w-full'>
      <div class='pb-8'>
        <p class='text-4xl font-bold inline border-b-4 border-red-700 text-white'>Contact</p>
        <p class='text-white py-4'>Submit the form below or shoot me an email - philiprmcdavid@gmail.com</p>
      </div>
      <input class='bg-zinc-400 text-white placeholder-white p-2 shadow-xl shadow-black' type="text" placeholder='Name'
             name='name' />
      <input class='my-4 p-2 bg-zinc-400 text-white placeholder-white shadow-xl shadow-black' type="email"
             placeholder='Email' name='email' />
      <textarea class='bg-zinc-400 text-white placeholder-white p-2 shadow-xl shadow-black' name="message" rows="10"
                placeholder='Message'></textarea>
      <button
          class='bg-zinc-900 text-neutral-400 border-red-700 px-4 py-3 my-8 mx-auto flex items-center border-2 shadow-md shadow-red-500 hover:bg-gradient-to-t from-zinc-900 to-red-700 hover:border-zinc-500'>Let's Collaborate</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style>

</style>