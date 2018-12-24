<template>
  <div class="container">
    <header>
      <h1 class="title">
        <img src="~assets/image/logo.png" alt="hair color" class="logo" />
      </h1>
    </header>
    <nuxt/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
  margin: 0 auto;
}

.title {
  padding: 4px 16px;
  line-height: 0;
}

.logo {
  width: auto;
  height: 2em;
}
</style>

