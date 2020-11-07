<template>
  <section class="form wrapper">
    <div class="container">
      <div class="form__body">
        <div class="form__h2">
          <h2>Register to get a work</h2>
          <p>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </p>
        </div>
        <form class="form__form">
          <div class="form__input">
            <p>Name</p>
            <input type="text" />
          </div>
          <div class="form__input">
            <p>Email</p>
            <input type="text" />
          </div>
          <div class="form__input">
            <p>Phone number</p>
            <input type="text" />
            <span class="">Еnter phone number in open format</span>
          </div>
          <div class="form__radio">
            <p>Select your position</p>
            <p>
              <input
                checked
                type="radio"
                name="beer"
                value="Frontend developer"
              />Frontend developer
            </p>
            <p>
              <input
                type="radio"
                name="beer"
                value="Backend developer"
              />Backend developer
            </p>
            <p><input type="radio" name="beer" value="Designer" />Designer</p>
            <p><input type="radio" name="beer" value="QA" />QA</p>
          </div>
          <div class="form__input">
            <p>Photo</p>
            <input type="text" />
          </div>
          <div>
            <button class="btn">Sing up now</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style lang="scss">
.form {
  & > .container {
    padding: 160px 30px;
  }
  &__body {
  }
  &__body p {
    font-family: "PT Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }
  &__body span {
    display: block;
    font-size: 12px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 14px;
  }
  &__input {
    height: 70px;
    margin: 0 0 20px 0;
  }
  &__input p {
    margin-left: 7px;
  }
  &__input span {
    margin-left: 7px;
  }
  &__radio {
    width: 50%;
    margin: 22px;
  }

  &__h2 {
    text-align: center;
  }
  &__h2 p {
    width: 446px;
    height: 41px;
    color: #4c4b4b;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 18px auto;
  }
}
input[type="text"] {
  width: 467px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #ffffff;
  margin: 6px;
}
input[type="radio"] {
  margin: 0 10px;
}
</style>
