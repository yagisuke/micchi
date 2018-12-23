<template>
  <div class="hero">
    <div class="hero-message">
      <h2>BEST. HAIR COLOR. ever</h2>
      <p>perfect shade is just a few questions away</p>
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
  background-image: url('/images/color-advisor/hero.jpeg');
  background-repeat: no-repeat;
  background-size:  cover;
  background-position: center center;
  height: 200px;

  .hero-message {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: inline-block;
    padding: 8px;
    background-color: rgba($white, 0.8)
  }
}
</style>
