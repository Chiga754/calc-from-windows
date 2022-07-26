<template>
    <div v-if="$store.state.showCalc" class="calc" ref="calc">
        <calc-top-menu @mousedown="dragging"/>
        <calc-section-calculations/>
        <calc-keyboard @clickBtn="clickBtn"/>
    </div>
</template>

<script>
import CalcTopMenu from '@/components/calc-components/CalcTopMenu'
import CalcSectionCalculations from '@/components/calc-components/CalcSectionCalculations'
import CalcKeyboard from "@/components/calc-components/CalcKeyboard"
export default {
    components: {
        CalcTopMenu,
        CalcSectionCalculations,
        CalcKeyboard,
    },
    methods: {
        clickBtn(value) {
            if(value === 'CE' || value === 'C'){
                this.$store.commit('resetRes', 0);
                return;
            }
            if(value === "<-") {
                this.$store.commit('setRes', this.$store.state.result.slice(0, -1));
                return;
            }
            if(value === "=") {
                this.$store.commit('setRes', eval(this.$store.state.result));
                return;
            }
            if(value === 'sqrt'){
                this.$store.commit('setRes', Math.sqrt(this.$store.state.result));
                return;
            }
            if(value === 'pow'){
                this.$store.commit('setRes', Math.pow(this.$store.state.result, 2)); 
                return;   
            }
            this.$store.commit('addRes', value)
        },
        dragging(event) {
            const calc = this.$refs.calc;
            let shiftX = event.clientX - calc.getBoundingClientRect().left;
            let shiftY = event.clientY - calc.getBoundingClientRect().top;
            calc.style.position = 'absolute';
            calc.style.zIndex = 1000;


            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                calc.style.left = pageX - shiftX + 'px';
                calc.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);
            calc.parentNode.onmouseup = function() {
                calc.parentNode.removeEventListener('mousemove', onMouseMove);
                calc.onmouseup = null;
            }
        }
    }
}
</script>

<style>
.calc{
    width: 360px;
    height: 650px;
    background: #1f1f1f;
}
</style>