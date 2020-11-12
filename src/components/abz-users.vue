<template>
  <section class="users wrapper">
    <div class="container">
      <div class="users__body">
        <div class="users__h2">
          <h2>Our cheerful users</h2>
          <p>Attention! Sorting users by registration date</p>
        </div>
        <div class="users__carts">
          <UsersCart
            class="item"
            v-for="cart in $store.state.data.users"
            :key="cart.id"
            :cart_data="cart"
          />
        </div>
        <div class="users__btn">
          <button
            class="btn"
            type="button"
            @click="showMore"
            v-show="$store.state.showBtn"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import UsersCart from "@/components/abz-users-cart";
export default {
  name: "Users",
  components: {
    UsersCart,
  },
  methods: {
    ...mapActions(["GET_CARTS_FROM_API"]),
    showMore() {
      this.GET_CARTS_FROM_API();
    },
  },
  mounted() {
    this.GET_CARTS_FROM_API();
  },
  data() {
    return {
      // carts: [
      //   {
      //     Image: "Maximillian.jpg",
      //     Name: "Maximillian",
      //     Position: "Leading specialist of the Control Department",
      //     Email: "controldepartment@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      //   {
      //     Image: "Adolph.jpg",
      //     Name: "Adolph Blaine Charles David Earl Matthew Matthew",
      //     Position: "Contextual advertising specialist",
      //     Email: "adolph.blainecharles@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      //   {
      //     Image: "Elizabeth.jpg",
      //     Name: "Elizabeth",
      //     Position: "Frontend developer",
      //     Email: "elisabet.front@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      //   {
      //     Image: "Alexander.jpg",
      //     Name: "Alexander Jayden",
      //     Position: "Backend developer",
      //     Email: "alexander.back@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      //   {
      //     Image: "Noah.jpg",
      //     Name: "Noah",
      //     Position: "QA",
      //     Email: "noah1998@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      //   {
      //     Image: "Smith.jpg",
      //     Name: "Liamgrievescasey Smith Wiam",
      //     Position: "Lead designer",
      //     Email: "liamgrievescasey.smith@gmail.com",
      //     Phone: "+380 50 678 03 24",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss">
.users {
  background-color: #f9f9f3;
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16% 0px;
    margin: 0 -15px;
  }

  &__h2 {
    text-align: center;
    letter-spacing: normal;
  }
  &__h2 > h2 {
    letter-spacing: 0.2px;
  }
  &__h2 p {
    color: #4c4b4b;
    font-size: 16px;
    line-height: 22px;
    margin: 20px 0 52px 0;
  }

  &__carts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__btn {
    padding: 4px 0 4px 0;
  }
}
.item {
  width: 26%;
  min-width: 220px;
  margin: 25px 0;
  text-align: center;
}
</style>
