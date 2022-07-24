<template>
  <div class="keyboard">
    <calc-keyboard-btn 
        v-for="btn in btns" 
        :key="btn.id"
        :value="btn.value"
    />
  </div>
</template>

<script>
import CalcKeyboardBtn from '@/components/calc-components/CalcKeyboardBtn';
import {btnsConfig1} from '@/config/keyboardConfig';
export default {
    components: {
        CalcKeyboardBtn,
    },
    data() {
        return {
            btns: btnsConfig1,
        }
    }
}
</script>

<style>
.keyboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    height: 63%;
}
.keyboard-btn{
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
}
.keyboard-btn:hover {
    background: #ffffff2b;  
}
</style>