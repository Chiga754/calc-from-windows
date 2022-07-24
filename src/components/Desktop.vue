<template>
  <div class="desktop">
    <calc></calc>
  </div>
</template>

<script>
import Calc from '@/components/Calc.vue';
export default {
    components: {
        Calc,
    } 
}
</script>

<style>
.desktop {
    width: 1024px;
    height: 768px;
    background-image: url(@/assets/windows10.jpg);
}
</style>