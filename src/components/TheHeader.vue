<template>
  <header class="header">
    <div class="header__left">
      <i class="iconfont icon-category header__icon" />
    </div>
    <div class="header__center">
      <p class="header__title">干货集中营</p>
    </div>
    <RouterLink class="header__right" to="/user">
      <i class="iconfont icon-search header__icon" />
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
  height: px2rem($header-height);
  background-color: #1d1f20;
  padding: 0.5rem 0.25rem;

  @at-root #{&}__icon {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
  }

  .icon-search {
    color: $color-white;
  }
}
</style>
