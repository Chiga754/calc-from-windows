<template>
  <button class="keyboard-btn">
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