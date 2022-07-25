<template>
    <button v-if="value === 'sqrt'" class="keyboard-btn" @click="$emit('clickBtn', value)">
        <sup>2</sup>&radic;x
    </button>
    <button v-else-if="value === 'pow'" class="keyboard-btn" @click="$emit('clickBtn', value)">
        <sub>2</sub>x
    </button>
    <button v-else class="keyboard-btn" @click="$emit('clickBtn', value)">
        {{ value }}
    </button>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
        }
    }
}
</script>

<style>
.keyboard-btn{
    border: 1px solid black;
    color: #ffffff;
    font-size: 20px;
    background: inherit;
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