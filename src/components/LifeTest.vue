<template>
  <h4>生命周期：</h4>
</template>

<script>
import {onBeforeMount, onMounted} from "vue";

export default {
  beforeCreate() {
    console.log(`配置项 beforeCreate`)
  },
  created() {
    console.log(`配置项 created`)
  },
  beforeMount() {
    console.log(`配置项 beforeMount`)
  },
  mounted() {
    console.log(`配置项 mounted`)
  },
  setup(){
    console.log(`组合式 setup`)
    onBeforeMount(() => {
      console.log(`组合式 onBeforeMount`)
    })
    onMounted(() => {
      console.log(`组合式 onMounted`)
    })
  }
}
</script>
