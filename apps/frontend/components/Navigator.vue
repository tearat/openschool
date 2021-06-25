<template>
  <nav class="navigator">
    <div class="navigator-left">
      <ul class="links">
        <li class="link">
          <NuxtLink to="/">
            <span class="link-icon icon-logo"></span>
            <span class="link-span">Open School</span>
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/">
            <span class="link-icon icon-list"></span>
            <span class="link-span">Все курсы</span>
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/">
            <span class="link-span">Процессы</span>
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/">
            <span class="link-span">Пожертвования</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navigator-right">
      <ul class="links">
        <li class="link">
          <NuxtLink to="/">
            <span class="link-icon icon-add"></span>
            <span class="link-span">Пожертвования</span>
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/">
            <span class="avatar"></span>
            <span class="link-span">Jane Cooper</span>
            <span class="dropdown" :click="dropDownUserActions"></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  methods: {
    dropDownUserActions() {}
  }
}

</script>

<style lang="scss">

.navigator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 80px;
  .navigator-right {
    text-align: right;
  }
  .links {
    list-style: none;
    margin: 0;
    padding: 0;
    // display: flex;
    // justify-content: center;
    // align-content: center;
    // align-items: center;
    .link {
      display: inline-block;
      padding: 0 20px;
      a {
        font-size: 20px;
        text-decoration: none;
      }
      .avatar {
        display: inline-block;
        position: relative;
        top: 10px;
        margin-top: -20px;
        // width: 40px;
        // height: 40px;
        border-radius: 50%;
        border: 20px solid magenta;
        background: magenta;
      }
    }
  }
}

</style>