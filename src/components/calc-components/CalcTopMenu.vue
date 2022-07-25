<template>
    <div class="calc-top-menu">
        <div class="title-app">Calculator</div>
        <div class="calc-top-menu_btns">
            <div class="btn" @click="$store.commit('setShowCalc', false)">
                <i class="fa fa-minus" aria-hidden="true"></i>
            </div>
            <div class="btn"><i class="fa fa-square-o" aria-hidden="true"></i></div>
            <div 
                class="btn"
                @click="$store.commit('setShowCalc', false)"
            >
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.calc-top-menu{
    height: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title-app{
    margin-left: 20px;
}
.calc-top-menu_btns{
    height: 100%;
    display: flex;
    align-items: center;
}
.calc-top-menu_btns .btn{
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: all .3s;
}
.calc-top-menu_btns .btn:hover{
    background: #ffffff2b;    
}
</style>