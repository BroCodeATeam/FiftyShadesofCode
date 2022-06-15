<template>
  <div id='work' class='w-full h-full bg-gradient-to-t from-zinc-900 to-zinc-700 text-[#ffffff] lg:w-full lg:h-full'>
    <div class='max-w-[1600px] mx-auto p-8 flex flex-col justify-center text-center w-full h-full'>
      <div class='pb-8'>
        <p class='text-4xl font-bold inline border-b-4 text-white border-red-700 drop-shadow-lg shadow-black'>
          Client Work
        </p>
        <p class='py-6'>Check out some of my recent work</p>
      </div>

      <div class='grid sm:grid-cols-1 md:grid-cols-4 gap-4' >
        <SingleWorkBlock v-for="(works, i) in worksData" :key='i' :works='works' />
      </div>

    </div>
  </div>
</template>

<script>
import SingleWorkBlock from '../components/Work.vue'
export default {
  name: 'Works',
  components: { SingleWorkBlock },
  data() {
    return {
      worksData: [
          {
          img: 'FrameofLightDesigns.jpg',
          title: 'Frame of Light Designs',
          site: `https://www.frameoflightdesigns.com`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'PositiveMasculinityNow.jpg',
          title: 'Positive Masculinity Now',
          site: `https://www.positivemasculinitynow.org`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'NENYOS.jpg',
          title: 'North Eastern New York Orchid Society',
          site: `https://www.nenyosorchids.com`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'TheAwesomeHairLab.jpg',
          title: 'The Awesome Hair Lab',
          site: `https://www.theawesomehairlab.com`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'GreenMountainHashCo.jpg',
          title: 'Green Mountain Hash Co',
          site: `https://www.greenmountainhashco.com`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'ASWMechanical.jpg',
          title: 'ASW Mechanical',
          site: ``,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'UnderdogDevs.jpg',
          title: 'Underdog Devs',
          site: `https://www.underdogdevs.org/`,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
          {
          img: 'BattleshipAPI-600x500.jpg',
          title: 'Battleship API',
          site: ``,
          siteTitle: 'Site',
          code: ``,
          codeTitle: 'Code'
        },
      ]
    }
  }
}
</script>

<style>

</style>