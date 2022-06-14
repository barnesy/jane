<template>
  <div class="directory">
    <section class="page-header" :style="{ 'background-color': bgColor,
                                           'background-image': bgImage
                                          }">

      <Navigation>
        <template #logo><g-link class="logo" to="/"></g-link></template>
        <ul>
          <g-link class="nav__link" to="/framework/">Framework</g-link>
          <g-link class="nav__link" to="/gas-generators/">Case Studies</g-link>
        </ul>
      </Navigation>

      <slot name="page-header"/>

    </section>

    <slot/>

    <Footer>
      <template #logo>
        <img src="../assets/img/socogas-logo.png" width="200"/>
      </template>
      <template #copyright>
        <p>&#169;2021 Market Strategy</p>
      </template>
      <template>
        <ul>
            <li class="hed">Market Strategy</li>
            <li><g-link class="nav__link" to="/">Home</g-link></li>
            <li><g-link class="nav__link" to="/gas-generators/">Gas Generators</g-link></li>
            <li><g-link class="nav__link" to="/framework/">Framework</g-link></li>
          </ul>
      </template>
    </Footer>
  </div>
</template>

<style lang="scss" scoped>

.directory.dark {
  .page-header {
    color: white;
  }
}

.page-header {
  width: 100%;
  background: grey;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  justify-content: center;
  min-height: 34rem;
  padding-bottom: 0;
}
</style>

<script>

export default {
  name: 'MSDirectory',
  props: {
  	align: {
      type: String
  	},
    bgColor: {
      type: String
    },
    bgImage: {
      type: String
    }
  }
}

</script>
