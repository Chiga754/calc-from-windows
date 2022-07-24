<template>
    <div class="calc">
        <calc-top-menu/>
        <calc-section-calculations/>
        <calc-keyboard/>
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