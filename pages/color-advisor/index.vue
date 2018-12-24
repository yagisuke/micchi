<template>
  <div>
    <section>
      <hero />
      <div class="box">
        <p class="question-number">1.</p>
        <p class="question-text">Let’s start with the end result. What look are you hoping to achieve?</p>
        <ul class="question-list">
          <li>
            <button type="button" class="is-selected">Root coverage only</button>
          </li>
          <li>
            <button type="button">All-over color</button>
          </li>
          <li>
            <button type="button">Highlights</button>
          </li>
          <li>
            <button type="button">I'm not sure</button>
          </li>
        </ul>
        <p class="question-description">Why we’re asking: The more you can tell us about what you want, the better we can help. And no matter what you select, you’ll be able to view our full range of colors and products.</p>
      </div>
      <div class="box">
        <p class="question-number">2.</p>
        <p class="question-text">How would you describe the texture of your hair?</p>
        <ul class="question-list">
          <li>
            <button type="button" class="is-selected">Straight</button>
          </li>
          <li>
            <button type="button">Wavy</button>
          </li>
          <li>
            <button type="button">Curly</button>
          </li>
          <li>
            <button type="button">Coily</button>
          </li>
        </ul>
        <p class="question-description">Pro tip: Our gentle hair color is safe to use on all hair types.</p>
      </div>
      <div class="box">
        <p class="question-number">3.</p>
        <p class="question-text">How much gray hair do you have?</p>
        <ul class="question-list">
          <li>
            <button type="button" class="is-selected">None</button>
          </li>
          <li>
            <button type="button">Some</button>
          </li>
          <li>
            <button type="button">Lots</button>
          </li>
          <li>
            <button type="button">All</button>
          </li>
        </ul>
        <p class="question-description">When your hair color grows out, how much gray do you see? Base your selection on where you have the most amount of gray (if applicable).</p>
      </div>
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
.box {
  position: relative;
  max-width: 33.5em;
  margin: 0 auto;
  padding: 2em 0;
  font-size: $font-size-xl;

  & + &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    height: 1px;
    width: 90%;
    background-color: $grayish-red;
  }
}

.question-number {
  font-family: Averta;
  font-style: normal;
  text-align: center;
  color: $dark-gray;
}

.question-text {
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.3em;
}

.question-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  justify-content: space-around;

  > li {
    width: 47%;
  }

  button {
    width: 100%;
    height: 3.7em;
    margin: 1.5% 0;
    padding: 0.5em;
    background-color: $white;
    border-radius: 0.5em;
    border: 2px solid $grayish-red;
    font-size: 1em;

    &.is-selected {
      border: 2px solid $very-soft-blue;
      color: $slightly-desaturated-blue;
    }
  }
}

.question-description {
  margin: 2em 0 1em;
  padding: 1.7em;
  font-size: 0.9em;
  line-height: 1.3em;
  text-align: center;
}
</style>
