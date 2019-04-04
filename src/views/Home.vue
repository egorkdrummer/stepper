<template lang="pug">
.container
  form-stepper
  router-view
  component(:is="currentStep")
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
      stepIsValid: false
    }
  },
  computed: {
    currentStep() {
      let step = null;
      if(this.stepIsValid) {
        switch(this.step && this.isValid) {
          case 1: 
            step = StepOne;
            break;

          case 2: 
            step = StepTwo;
            break;

          case 3: 
            step = StepThree;
            break;
          
          default: 
            step = StepOne;
        }
      }
      return step;
    }
    
    
     
  }
}
</script>
