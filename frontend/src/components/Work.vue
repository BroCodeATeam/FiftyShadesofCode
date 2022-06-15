<template>
  <div
      class='works-block shadow-lg shadow-red-900 group container rounded-md flex justify-center items-center mx-auto    content-div works-img'
       :style='backgroundImageInlineStyle' >
    <div
        class='opacity-0 group-hover:opacity-100 hover:rounded-md hover:bg-gradient-to-t from-zinc-900 to-red-700 hover:border-zinc-500 hover:h-auto' >
              <span class='text-2xl font-bold text-white drop-shadow-md shadow-white tracking-wider' >
                {{works.title}}
              </span>
      <div class='pt-8 text-center'>
        <a href={{works.site}} target='_blank' >
          <button class='bg-zinc-900 text-white border-red-700 px-2 py-2 m-3 w-12 h-10 justify-center mx-auto border-2 shadow-md shadow-red-500 hover:bg-gradient-to-t from-zinc-900 to-red-700 hover:border-zinc-500'>
            {{works.siteTitle}}
          </button>
        </a>
        <a href={{works.code}} target='_blank' >
          <button class='bg-zinc-900 text-white border-red-700 px-2 py-2 ml-3 w-14 h-10 justify-center mx-auto border-2 shadow-md shadow-red-500 hover:bg-gradient-to-t from-zinc-900 to-red-700 hover:border-zinc-500'>
            {{works.codeTitle}}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleWorkBlock',
  props: {
    works: Object
  },
  computed: {
    backgroundImageInlineStyle() {
      return `background-image: url("../assets/works/${this.works.img}");`
    }
  }
}
</script>

<style scoped>
.works-img {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.works-block {
  background: linear-gradient(#19181B, #B71C1C);
  width: auto;
  display: inline-block;
  margin: 10px 5px;
  box-sizing: border-box;
  vertical-align: top;
}
</style>