<template>
  <video width="100%" height="100%" controls>
    <source src="../assets/video/方干.mp4" />
  </video>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
}

.play-v {
  width: 100%;
  outline: none;
  position: relative;
}

.control {
  background: url("../assets/jpg/bofang.png") no-repeat;
  background-size: 40%;
  background-position: center;
  width: 10vh;
  height: 10vh;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.6;
  position: absolute;
  left: 50%;
  top: 45%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99;
  outline: none;
}
</style>
