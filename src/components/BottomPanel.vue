<template>
  <div class="bottom-panel">
    <button class="windows">
        <i class="fa fa-windows" aria-hidden="true"></i>
    </button>
    <div class="search-container">
        <i class="search-icon fa fa-search" aria-hidden="true"></i>
        <input class="search" placeholder="Type here to search">
    </div>
    <div 
        class="calc-link" 
        :class="{active : $store.state.showCalc}"
        @click="$store.commit('setShowCalc', !$store.state.showCalc)"
    >
        <img src="../assets/shortcut-calc.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom-panel{
    width: 100%;
    height: 40px;
    background: rgba(39, 39, 39, 0.863);
    position: absolute;
    bottom: 0;
    display: flex;
}
.windows{
    width: 45px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: all .2s;
}
.windows:hover{
    color: rgb(86, 139, 255);
    background: rgba(39, 39, 39, 0.932);
}
.search {
    width: 300px;
    background: gray;
    border: 1px solid rgb(102, 102, 102);
    color: white;
    padding-left: 40px;
}
.search::placeholder {
    color: #fff;
}
.search-container {
    display: flex;
    position: relative;
}
.search-icon{
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 20px;
}
.calc-link {
    width: 50px;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.calc-link:hover{
    background: rgba(39, 39, 39, 0.932);
}
.calc-link img{
    height: 80%;
}
.active{
    border-bottom: 3px solid rgb(0, 119, 255);
}
</style>