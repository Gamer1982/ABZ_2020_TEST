<template>
  <footer class="footer wrapper">
    <div class="section">
      <div class="footer__body">
        <hr />

        <p>© abz.agency specially for the test task</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  height: 60px;
  &__body {
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    font-weight: 400;
    color:$text-color;
  }
}

@import "/src/styles/_media.scss";
</style>
