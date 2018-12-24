<template>
  <div>
    <section>
      <hero />
      <div class="question-box" id="question1">
        <p class="question-number">1.</p>
        <p class="question-text">{{ question1.text }}</p>
        <ul class="question-list">
          <li v-for="(item, index) in question1.items" :key="index">
            <button type="button" :class="{ 'is-selected': question1.answer === index }" @click="answer('question1', index)">
              {{ item.text }}
            </button>
          </li>
        </ul>
        <p class="question-description">{{ question1.description }}</p>
      </div>
      <div v-show="question1.answer !== null" class="question-box" id="question2">
        <p class="question-number">2.</p>
        <p class="question-text">{{ question2.text }}</p>
        <ul class="question-list">
          <li v-for="(item, index) in question2.items" :key="index">
            <button type="button" :class="{ 'is-selected': question2.answer === index }" @click="answer('question2', index)">
              {{ item.text }}
            </button>
          </li>
        </ul>
        <p class="question-description">{{ question2.description }}</p>
      </div>
      <div v-show="question2.answer !== null" class="question-box" id="question3">
        <p class="question-number">3.</p>
        <p class="question-text">{{ question3.text }}</p>
        <ul class="question-list">
          <li v-for="(item, index) in question3.items" :key="index">
            <button type="button" :class="{ 'is-selected': question3.answer === index }" @click="answer('question3', index)">
              {{ item.text }}
            </button>
          </li>
        </ul>
        <p class="question-description">{{ question3.description }}</p>
      </div>
      <div v-show="allAnswered" class="result-box">
        <a href="https://www.ayana.com/" target="_blank" class="result-link" @click.prevent="next">Complete!!</a>
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
export default class extends Vue {
  question1 = {
    text: 'Let’s start with the end result. What look are you hoping to achieve?',
    items: [
      { text: 'Root coverage only' },
      { text: 'All-over color' },
      { text: 'Highlights' },
      { text: 'I\'m not sure' }
    ],
    description: 'Why we’re asking: The more you can tell us about what you want, the better we can help. And no matter what you select, you’ll be able to view our full range of colors and products.',
    answer: null
  }

  question2 = {
    text: 'How would you describe the texture of your hair?',
    items: [
      { text: 'Straight' },
      { text: 'Wavy' },
      { text: 'Curly' },
      { text: 'Coily' }
    ],
    description: 'Pro tip: Our gentle hair color is safe to use on all hair types.',
    answer: null
  }

  question3 = {
    text: 'How much gray hair do you have?',
    items: [
      { text: 'None' },
      { text: 'Some' },
      { text: 'Lots' },
      { text: 'All' }
    ],
    description: 'When your hair color grows out, how much gray do you see? Base your selection on where you have the most amount of gray (if applicable).',
    answer: null
  }

  get allAnswered () {
    return [this.question1.answer, this.question2.answer, this.question3.answer].indexOf(null) === -1
  }

  answer (question: string, index: number) {
    this[question].answer = index
    const element = document.getElementById(question)
    if (!element) return
    this.$nextTick(() => (smoothScroll(element.offsetTop + element.clientHeight)))
  }

  next () {
    const texts = [this.question1, this.question2, this.question3].map((val) => {
      const index = val.answer
      return index !== null ? val.items[index].text : ''
    })
    window.alert(texts)
  }
}

const smoothScroll = (range: number) => {
  const start = window.pageYOffset
  const easeOut = p => p * (2 - p)
  const diff = range - start

  let position = 0
  let progress = 0

  const move = () => {
    progress++
    position = start + (diff * easeOut(progress / 40))
    window.scrollTo(0, position)
    if (position < range) window.requestAnimationFrame(move)
  }
  window.requestAnimationFrame(move)
}
</script>

<style lang="scss" scoped>
.question-box {
  position: relative;
  max-width: 33.5em;
  margin: 0 auto;
  padding: 2em 0;
  font-size: $font-size-xl;
  text-align: center;

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
  color: $dark-gray;
}

.question-text {
  margin-bottom: 1em;
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
  line-height: 1.3em 
}

.result-box {
  padding-bottom: 80px;
  text-align: center;

  .result-link {
    display: inline-block;
    min-width: 21em;
    margin: 1.5em auto;
    padding: 1em 2em;
    border: 2px solid #53284f;
    background-color: #53284f;
    vertical-align: middle;
    line-height: 1.3em;
    font-size: 1em;
    font-family: 'Averta-Semibold',sans-serif;
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: $white;
    cursor: pointer;
  }
}
</style>
