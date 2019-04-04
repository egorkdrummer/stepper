<template lang="pug">
  #app
    nav#nav
        router-link(v-for="(item, index) in items" :to="item.path" exact="") {{ item.title }}
    router-view
</template>

<script>
import FormStepper from '@/components/FormStepper';
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepTree';

export default {
  name: "Home",
  components: {
    FormStepper,
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      step: 1,
      stepIsValid: false,
      items: [
        {
          title: 'step one',
          path: '/step-one'
        }, 
        {
          title: 'step two',
          path: '/step-two'
        }, 
        {
          title: 'step three',
          path: '/step-three'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
