<template>
  <div class="desktop" ref="descktop">
    <calc/>
    <shortcut/>
    <bottom-panel/>
  </div>
</template>

<script>
import Calc from '@/components/Calc.vue';
import App from '@/App.vue';
import Shortcut from '@/components/Shortcut.vue';
import BottomPanel from '@/components/BottomPanel.vue';
export default {
    components: {
        Calc,
        App,
        Shortcut,
        BottomPanel,
    } 
}
</script>

<style>
.desktop {
    width: 1024px;
    height: 768px;
    background-image: url(@/assets/windows10.jpg);
    position: relative;
    box-shadow: 0 0 50px #000000;
    overflow: hidden;
}
</style>