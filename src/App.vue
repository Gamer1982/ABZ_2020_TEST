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
  height: 100%;
  padding: 0 30px;
  margin: 0 auto;
  overflow: hidden;
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
  margin: 2px 0 2px 0;
	cursor: pointer;
}
.wrapper {
  position: relative;
  width: 100%;
}
h1 {
  font-size: calc(10px + 100vw / 25.6);
  line-height: calc(14px + 100vw / 25.6);
  font-weight: 400;
  letter-spacing: -0.5px;
}

h2 {
  line-height: calc(10px + 100vw / 25.6);
  font-weight: 400;

  font-size: calc(10px + 100vw / 25.6);
  letter-spacing: -0.5px;
}

h5 {
  color: $main-color;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.4px;
}
hr {
  height: 1px;
  background-color: #a79d9d;
  margin-left: -30px;
}
a {
  text-decoration: none;
  color: $main-color;
}
img {
  display: block;
}
</style>
