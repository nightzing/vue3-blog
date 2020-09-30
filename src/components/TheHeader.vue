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
  <van-swipe>
    <van-swipe-item
      class="swipe__item"
      v-for="item in state.images"
      :key="item.title"
    >
      <van-image
        class="swipe__image"
        width="100%"
        height="200"
        fit="cover"
        :src="item.image"
        @click="swipeView(item)"
      />
      <span class="swipe__title">{{ item.title }}</span>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getSwiperData from "./ts/swipe";
export default defineComponent({
  name: "TheHeader",
  setup() {
    const { state, swipeView } = getSwiperData();
    console.log(state);
    return {
      state,
      swipeView
    };
  }
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

.swipe__item .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swipe__image img {
  position: absolute;
  left: 0;
  top: 0;
}
.swipe__title {
  position: absolute;
  width: 100%;
  left: 0;
  top: 180px;
  text-align: center;
}
</style>
