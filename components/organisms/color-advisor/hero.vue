<template>
  <div class="hero">
    <div class="hero-message">
      <h2 class="title">BEST. HAIR COLOR. ever</h2>
      <p class="description">perfect shade is just a few questions away</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 200px;
  background-repeat: no-repeat;
  background-size:  cover;
  background-position: center center;
  background-image: url('~assets/image/color-advisor/hero.jpeg');

  .hero-message {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: inline-block;
    padding: 8px;
    background-color: rgba($white, 0.8)
  }
}

.title {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
}

.description {
  color: $very-dark-grayish-blue;
}
</style>
