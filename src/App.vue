<template>
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Works />
  <Contact />
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Home from './components/Header.vue'
  import About from './pages/About.vue'
  import Skills from './pages/Skills.vue'
  import Works from './pages/Works.vue'
  import Contact from './pages/Contact.vue'

  export default {
    name: 'Index',
    components: { Navbar, Home, About, Skills, Works, Contact }
  }
</script>
