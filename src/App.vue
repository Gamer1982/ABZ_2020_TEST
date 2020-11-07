<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/styles/_fonts.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: "Open Sans";
  height: 100%;
}
#app {
  max-width: $max-w;
  position: relative;
  margin: 0 auto;
}
.container {
  max-width: $max-w;
  padding: 0 30px;
  margin: 0 auto;
}
.btn {
  width: 210px;
  height: 38px;
  border-radius: 4px;
  background-color: #ef5b4c;
  color: #fefefe;
  font-size: 19px;
  font-family: "Open Sans - Semibold";
  font-weight: 400;
}
.wrapper {
  position: relative;
}
h1 {
  color: #ffffff;
  font-size: 50px;
  line-height: 54px;
  font-weight: 400;
  text-transform: uppercase;
  // letter-spacing: -0.5px;
}
h2 {
  font-size: 50px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  line-height: 50px;
}
h5 {
  color: #212529;
  font-size: 24px;
  line-height: 24px;
  // letter-spacing: -0.4px;
}
</style>
