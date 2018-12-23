<template>
  <div>
    <section>
      <hero />
      <div>hello</div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Hero from '~/components/organisms/color-advisor/hero.vue'

@Component({
  components: {
    Hero
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
