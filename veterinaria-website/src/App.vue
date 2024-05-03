<template>
  <HeaderBar />
  <router-view />
  <FooterBar />
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
// import DummyMain from './components/DummyMain.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar,
    // DummyMain,
  }
}
</script>