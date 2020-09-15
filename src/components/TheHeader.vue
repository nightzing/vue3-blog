<template>
  <header class="header">
    <div class="header__left">
      <i class="header__icon header__icon--collapse" />
    </div>
    <div class="header__center">
      <p class="header__title">干货集中营</p>
    </div>
    <RouterLink class="header__right" to="/user">
      <i class="header__icon header__icon--search" />
    </RouterLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader"
});
</script>

<style lang="scss" scoped>
.header {
  @include layout-flex(center, space-between);
  @at-root #{&}__left {
    text-align: left;
  }
}
</style>
