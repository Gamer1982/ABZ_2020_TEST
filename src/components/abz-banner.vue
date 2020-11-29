<template>
  <main class="banner wrapper">
    <div class="banner__img">
      <picture>
        <source
          type="image/webp"
          srcset="../assets/img/banner-photo_768.webp"
          media="(max-width:360px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_992.webp,
            ../assets/img/banner-photo_1920.webp 2x,
            ../assets/img/banner-photo_2560.webp 3x
          "
          media="(max-width:768px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_1024.webp,
            ../assets/img/banner-photo_2560.webp 2x,
            ../assets/img/banner-photo_3840.webp 3x,

          "
          media="(max-width:992px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_1024.webp,
            ../assets/img/banner-photo_2560.webp 2x,
            ../assets/img/banner-photo_3840.webp 3x,

          "
          media="(max-width:1024px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_1366.webp,
            ../assets/img/banner-photo_2560.webp 2x,
            ../assets/img/banner-photo_3840.webp 3x,

          "
          media="(max-width:1366px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_1440.webp,
            ../assets/img/banner-photo_2560.webp 2x,
            ../assets/img/banner-photo_3840.webp 3x,

          "
          media="(max-width:1440px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_1920.webp,
            ../assets/img/banner-photo_3840.webp 2x,
            ../assets/img/banner-photo.webp      3x
          "
          media="(max-width:1920px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_2560.webp,
            ../assets/img/banner-photo.webp      2x
          "
          media="(max-width:2560px)"
        />
        <source
          type="image/webp"
          srcset="
            ../assets/img/banner-photo_3840.webp,
            ../assets/img/banner-photo.webp      2x
          "
          media="(max-width:3840px)"
        />
        <source
          type="image/webp"
          srcset="../assets/img/banner-photo.webp"
          media="(min-width:3841px)"
        />
        <img src="../assets/img/banner-photo_1366.jpg" alt="img-banner" />
      </picture>
    </div>
    <div class="container">
      <div class="banner__body">
        <div class="banner__h1">
          <h1>
            Test assignment
            <br />for Frontend <br />Developer position
          </h1>
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
          <button v-scroll-to="'#formWrapper'" class="btn">Sing up now</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss">
.banner {
  height: 600px;
  margin-top: 60px;
  overflow: hidden;

  &__img {
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    z-index: -5;
    transform: translate(-50%, 0);
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  &__h1 {
    display: flex;
    text-align: left;
    text-transform: uppercase;
    color: #ffffff;
  }

  &__reminder {
    max-width: 530px;
    width: 65%;
    display: flex;
    margin: 25px 0 32px 1px;
    max-height: 240px;
    overflow: auto;
  }
  &__reminder p {
    color: #ffffff;

    font-weight: 400;
    line-height: 24px;
  }
  &__btn {
    padding: 0 0 6px 0;
  }
}
</style>
