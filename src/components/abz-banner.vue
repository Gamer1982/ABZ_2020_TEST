<template>
  <section class="banner wrapper">
    <div class="container">
      <div class="banner__body">
        <div class="banner__h1">
          <h1>Test assignment for Frontend Developer position</h1>
        </div>
        <div class="banner__reminder">
          <p>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
            <span class="mobil-hiden">
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck! The photo has to scale in the banner area
              on the different screens
            </span>
          </p>
        </div>
        <div class="banner__btn">
          <button class="btn">Sing up now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss">
.banner {
  background: no-repeat center/cover url("~@/assets/img/banner-photo.jpg");
  margin-top: 60px;

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 600px;
  }

  &__h1 {
    max-width: 509px;
    display: flex;
  }
  &__reminder {
    max-width: 55%;
    display: flex;
    margin: 24px 0 32px 1px;
  }
  &__reminder p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  &__btn {
    padding: 2px 0 6px 0;
  }
}
</style>
