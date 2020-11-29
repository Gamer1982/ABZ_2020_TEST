<template>
  <header class="header wrapper">
    <div class="container">
      <div class="header__body">
        <a href="#" v-scroll-to="'#formWrapper'" class="header__logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </a>
        <div
          class="header__burger"
          @click="isActive = !isActive"
          :class="{ active: isActive }"
        >
          <span></span>
        </div>
        <nav class="header__menu" :class="{ active: isActive }">
          <ul class="header__list hiden2">
            <li>
              <a href="#" v-scroll-to="'#formWrapper'" class="header__link"
                >About me</a
              >
            </li>
            <li>
              <a href="#" v-scroll-to="'#formWrapper'" class="header__link"
                >Relationships</a
              >
            </li>
            <li>
              <a href="#" v-scroll-to="'#formWrapper'" class="header__link"
                >Requirements</a
              >
            </li>
            <li>
              <a href="#" v-scroll-to="'#formWrapper'" class="header__link"
                >Users</a
              >
            </li>
            <li>
              <a href="#" v-scroll-to="'#formWrapper'" class="header__link"
                >Sign Up</a
              >
            </li>
          </ul>
          <ul class="header__list hiden">
            <hr />
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >About me</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Relationships</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Users</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Sign Up</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Terms and Conditions</a
              >
            </li>
            <hr />
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >How it works</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Partnership</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Help</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Leave testimonial</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Contact us</a
              >
            </li>
            <hr />
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Articles</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Our news</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Testimonials</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Licenses</a
              >
            </li>
            <li>
              <a
                href="#"
                v-scroll-to="'#formWrapper'"
                class="header__link"
                @click="isActive = !isActive"
                :class="{ active: isActive }"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
---------------------------------------------------------------------------------------------
<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    togleBurger() {},
  },
};
</script>
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  &__body {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }

  &__logo {
    position: relative;
    z-index: 3;
  }
  &__logo img {
    max-width: 100%;
    display: block;
  }

  &__burger {
    display: none;
  }
  &__burger.active::before {
    transform: rotate(45deg);
    top: 6px;
  }
  &__burger.active::after {
    transform: rotate(-45deg);
    bottom: 6px;
  }
  &__burger.active span {
    transform: scale(0);
  }
  &__menu {
    padding-bottom: 2px;
  }
  &__menu.active {
    top: 0;
  }

  &__list {
    display: flex;
    position: relative;
    z-index: 2;
  }
  &__list li {
    list-style: none;
    margin: 0 0 0 28.5px;
  }

  &__link {
    color: $main-color;
    font-size: 14px;
    text-decoration: none;
  }
}
.hiden {
  display: none;
  hr {
    margin: 24px 0 22px 0;
  }

  hr:first-child {
    margin: 0 0 22px 0;
  }
}
li a:hover {
  color: salmon;
}
li a:active {
  color: royalblue;
}
</style>
