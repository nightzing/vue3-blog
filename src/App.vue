<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-white;
  background: $color-theme;

  .container {
    position: absolute;
    top: $header-height;
    bottom: 0;
    width: 100%;
  }
}
</style>
