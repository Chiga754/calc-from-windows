<template>
  <div class="section-calculations">
    <div class="top">
      <div>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span>Standard</span>
      </div>
      <i class="fa fa-history" aria-hidden="true"></i>
    </div>
    <div class="display">
      <input type="text" :value="$store.state.result">
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.section-calculations{
  height: 30%;
  padding: 10px;
}
.top{
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
}
span{
  margin-left: 20px;
}
.display{
  height: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
}
input {
  width: 100%;
  font-size: 50px;
  text-align: right;
  background: inherit;
  border: none;
  color: #ffffff;
}
</style>