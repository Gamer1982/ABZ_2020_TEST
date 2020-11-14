<template>
  <div class="abz-modal" @click="isModal">
    <div class="modal">
      <div class="modal__body">
        <div class="modal__header">
          <p>{{ $store.state.modal.title }}</p>
          <span class="cross" @click="isModal"></span>
        </div>
        <div class="modal__response">{{ $store.state.modal.resp }}</div>
        <div class="modal__footer">
          <button class="btn" @click="isModal">Great</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Modal",
  methods: {
    ...mapMutations(["IS_MODAL"]),
    isModal() {
      this.IS_MODAL(false);
    },
  },
};
</script>

<style lang="scss">
.abz-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: rgba(#000, 0.5);
}
.modal {
  padding: 30px 15px;
  width: 100%;
  max-width: 425px;
  margin: auto;
  overflow: auto;

  &__body {
    background-color: #fff;
    position: relative;
    border: 1px solid rgba(#000, 0.2);
    border-radius: 3px;
  }

  &__header {
    padding: 12px 16px 18px;
    border-bottom: 1px solid #eceef1;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    color: #000000;
    .cross::after,
    .cross::before {
      content: "";
      background-color: #7b7b7b;
      position: absolute;
      right: 0;
      height: 3px;
      width: 14px;
    }
    .cross::before {
      top: 28px;
      right: 16px;
      transform: rotate(-45deg);
    }
    .cross::after {
      top: 28px;
      right: 16px;
      transform: rotate(+45deg);
    }
  }

  &__response {
    padding: 17px;
    font-size: 16px;
    border-bottom: 1px solid #eceef1;
    color: #4c4b4b;
  }

  &__footer {
    padding: 16px;
    text-align: right;
  }
  .btn {
    width: 80px;
  }
}
</style>
