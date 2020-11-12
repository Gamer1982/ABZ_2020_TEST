<template>
  <div class="cart wrapper">
    <div class="cart__container">
      <div class="cart__body">
        <div class="cart__foto">
          <img loading="lazy" :src="cart_data.photo" alt="" />
        </div>
        <p class="cart__name">{{ cart_data.name }}</p>
        <p class="cart__position">{{ cart_data.position }}</p>
        <p
          @mouseout="is_hover_email = !is_hover_email"
          @mouseover="is_hover_email = !is_hover_email"
          class="cart__email"
        >
          <a href="#" v-scroll-to="'#formWrapper'">{{ cart_data.email }}</a>
          <a href="#" v-if="is_hover_email" class="to-hover">{{
            cart_data.email
          }}</a>
        </p>
        <p
          @mouseout="is_hover_phone = !is_hover_phone"
          @mouseover="is_hover_phone = !is_hover_phone"
          class="cart__phone"
        >
          <a href="#" v-scroll-to="'#formWrapper'">{{
            formatPhone(cart_data.phone)
          }}</a>
          <a v-if="is_hover_phone" class="to-hover">{{
            formatPhone(cart_data.phone)
          }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersCart",
  methods: {
    formatPhone(num) {
      return (
        num.slice(0, 4) +
        " " +
        num.slice(4, 6) +
        " " +
        num.slice(6, 9) +
        " " +
        num.slice(9, 11) +
        " " +
        num.slice(11, 13)
      );
    },
    imgError: () => {
      this.src = "../assets/img/photo-cover.png";
    },
  },
  computed: {},
  data() {
    return {
      is_hover_phone: false,
      is_hover_email: false,
    };
  },
  props: {
    cart_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.cart {
  &__container {
    width: 214px;
    height: 100%;
    padding: 0 5px;
    margin: 0 auto;
    overflow: hidden;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4c4b4b;
    font-size: 16px;
    line-height: 24px;
  }

  &__name {
    color: $main-color;
    font-size: 24px;
    line-height: 29px;
    margin-top: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  &__foto {
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 6px;
    width: 70px;
    height: 70px;
    background-image: url("../assets/img/photo-cover.svg");
  }

  &__position {
    margin-top: 10px;
  }

  &__email {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .to-hover {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.3);
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 10px;
    left: 50%;
    transform: translate(-50%);
    font-size: 14px;
    bottom: -28px;
    font-family: "SourceSansPro";
    color: #fefefe;
    position: absolute;
  }
}
</style>
