<template>
  <section class="about wrapper">
    <div class="container">
      <div class="about__body">
        <div class="about__h2">
          <h2>Let's get acquainted</h2>
        </div>
        <div class="about__cost">
          <div class="about__svg">
            <img src="~@/assets/img/man-laptop-v1.svg" alt />
          </div>
          <div class="about__text-wrapper">
            <h5>I am cool frontend developer</h5>
            <div class="about__text">
              <p>
                We will evaluate how clean your approach to writing CSS and
                Javascript
                <span
                  >code is. You can use any CSS and Javascript 3rd party
                  libraries without any restriction.</span
                >
              </p>
              <br />
              <p>
                If 3rd party css/javascript libraries are added to the
                projectvia bower/npm/yarn you will get bonus points. If you use
                any task runner (gulp/webpack) you will get bonus points as
                well.Slice service directory page PSD mockup into HTML5/CSS3.
              </p>
            </div>
            <button class="about__btn">Sing up now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
.about {
  &__body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 721px;
  }
  &__h2 {
    margin: 0 0 73px 0;
    letter-spacing: -0.5px;
  }

  &__cost {
    display: flex;
  }
  &__svg img {
    max-width: 339px;
    height: auto;
    margin: 2px 50px 0 25px;
  }
  &__text-wrapper {
    max-width: 551px;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__text {
    color: #4c4b4b;
    font-size: 16px;
    line-height: 24px;
    padding: 0 0 5px 0;
    text-align: justify;
  }

  &__btn {
    color: #ef5b4c;
    font-family: "Open Sans - Semibold";
    font-size: 19px;
    font-weight: 400;
    background: none;
    width: 98px;
  }
}
</style>
