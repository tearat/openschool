<template>
  
  <div class="hero">
    <h1 class="header">
      <span class="color-accent">Свободная</span>
      образовательная платформа
    </h1>
    <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sunt doloribus rem nihil quae.</p>
    <div class="links">
      <NuxtLink to="/" class="hero-link bg-accent">
        Начать обучение
      </NuxtLink>
      <NuxtLink to="/" class="hero-link">
        О платформе
      </NuxtLink>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.hero {
  padding: 20px 100px;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  .header {
    max-width: 500px;
    font-size: 72px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 20px;
    max-width: 500px;
    margin-bottom: 20px;
  }
  .hero-link {
    display: inline-block;
    padding: 20px;
    font-size: 20px;
    &.bg-accent {
      background: magenta;
      color: white;
      text-decoration: none;
    }
  }
  .color-accent {
    color: royalblue;
  }
}

</style>