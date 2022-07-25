<template>
  <div class="desktop">
    <calc/>
    <shortcut/>
  </div>
</template>

<script>
import Calc from '@/components/Calc.vue';
import App from '@/App.vue';
import Shortcut from './Shortcut.vue';
export default {
    components: {
        Calc,
        App,
        Shortcut,
    } 
}
</script>

<style>
.desktop {
    width: 1024px;
    height: 768px;
    background-image: url(@/assets/windows10.jpg);
    position: relative;
}
</style>