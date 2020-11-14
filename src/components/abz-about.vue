<template>
  <section class="about wrapper">
    <div class="container">
      <div class="about__body">
        <div class="about__h2">
          <h2>Let's get acquainted</h2>
        </div>
        <div class="about__cost">
          <div class="about__svg">
            <img src="~@/assets/img/man-laptop-v1.svg" />
          </div>
          <div class="about__text-wrapper">
            <h5>I am cool frontend developer</h5>
            <div class="about__text">
              <p>
                We will evaluate how clean your approach to writing CSS and
                Javascript code is. You can use any CSS and Javascript 3rd party
                libraries without any restriction.
              </p>
              <br />
              <p>
                If 3rd party css/javascript libraries are added to the project
                via bower/npm/yarn you will get bonus points. If you use any
                task runner (gulp/webpack) you will get bonus points as
                well.Slice service directory page PSD mockup into HTML5/CSS3.
              </p>
            </div>
            <div class="about__btn2">
              <button v-scroll-to="'#formWrapper'" class="btn2">
                Sing up now
              </button>
            </div>
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
    align-items: center;
    justify-content: space-between;
    //min-height: 721px;
  }
  & .container {
    padding-top: 15%;
    padding-bottom: 15%;
  }
  &__h2 {
    margin: 0 0 72px 0;
  }

  &__cost {
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;
    flex-wrap: wrap;
  }
  &__svg {
    flex: 0 0 calc(55.46% - 136.8px);
    height: auto;
    padding: 1px 10px;
    min-width: 200px;
  }
  &__svg img {
    display: block;
    margin: 0 auto;
    width: calc(36vw - 29px);
    max-width: 100%;
    max-height: 100%;
  }
  &__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    flex: 0 0 calc(46.5% + 113px);
    min-width: 300px;
  }

  &__text {
    color: #4c4b4b;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    margin: 22px 0 24px 0;
  }
  &__btn2 {
    padding: 2px 0 1px 0;
		
  }

  .btn2 {
    color: #ef5b4c;
    font-family: "Open Sans";
    font-size: 16px;
    background: none;
    font-weight: 600;
    width: 96px;
		cursor: pointer;
  }
	.btn2:hover{
	color: #D24335;
}
}
</style>
