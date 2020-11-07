<template>
  <div class="cart wrapper">
    <div class="cart__foto">
      <img :src="require('../assets/img/' + cart_data.Image)" alt="img" />
    </div>
    <p class="cart__name">{{ cart_data.Name }}</p>
    <p class="cart__position">{{ cart_data.Position }}</p>
    <p class="cart__email">{{ cart_data.Email }}</p>
    <p class="cart__phone">{{ cart_data.Phone }}</p>
  </div>
</template>

<script>
export default {
  name: "UsersCart",
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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4c4b4b;
  font-size: 16px;
  line-height: 24px;

  &__name {
    color: $main-color;
    font-size: 24px;
    line-height: 29px;
    margin-top: 11px;
  }
  &__foto {
    overflow: hidden;
    border-radius: 50%;
  }

  &__position {
    margin-top: 8px;
  }

  &__email {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  &__phone {
  }
}
</style>
