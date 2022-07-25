<template>
  <div class="shortcut" @dblclick="$store.commit('setShowCalc', true)">
    <img src="../assets/shortcut-calc.png" alt="">
    calc
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shortcut{
    width: 63px;
    height: 80px;
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
}
.shortcut:hover {
  border: 1px solid rgb(0, 140, 255);
}
.shortcut img {
  width: 95%;
  height: 95%;
}
</style>