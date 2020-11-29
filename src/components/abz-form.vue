<template>
  <section class="form wrapper" id="formWrapper">
    <div class="container">
      <div class="form__body">
        <div class="form__h2">
          <h2>Register to get a work</h2>
          <p>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </p>
        </div>

        <form
          class="form__form"
          novalidate
          action="mail.php"
          @submit.prevent="submitForm"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class="form__input">
            <p>Name</p>
            <input
              type="text"
              placeholder="Your name"
              v-model.trim="$v.form.name.$model"
              :class="{ invalid: $v.form.name.$error }"
            />
            <small class="error">
              <template v-if="$v.form.name.$dirty && !$v.form.name.required">
                Please fill in this field
              </template>
              <template
                v-else-if="$v.form.name.$dirty && !$v.form.name.minLength"
              >
                {{
                  `The name must be at least ${$v.form.name.$params.minLength.min} characters`
                }}
              </template>
              <template
                v-else-if="$v.form.name.$dirty && !$v.form.name.maxLength"
              >
                {{
                  `Max length is ${$v.form.name.$params.maxLength.max} characters`
                }}
              </template>
            </small>
          </div>

          <div class="form__input">
            <p>Email</p>
            <input
              type="text"
              placeholder="Your email"
              v-model.trim="$v.form.email.$model"
              :class="{ invalid: $v.form.email.$error }"
            />
            <small class="error">
              <template v-if="$v.form.email.$dirty && !$v.form.email.required">
                Please fill in this field
              </template>
              <template
                v-else-if="$v.form.email.$dirty && !$v.form.email.validateEmail"
              >
                The email must be a valid email address
              </template>
            </small>
          </div>

          <div class="form__input">
            <p>Phone number</p>
            <input
              type="tel"
              placeholder="+380 XX XXX XX XX"
              v-model.trim="$v.form.phone.$model"
              @focus="phoneOnFocus"
              :class="{ invalid: $v.form.phone.$error }"
            />
            <small class="error">
              <template v-if="$v.form.phone.$dirty && !$v.form.phone.required">
                Please fill in this field
              </template>
              <template
                v-else-if="$v.form.phone.$dirty && !$v.form.phone.validatePhone"
              >
                Check your phone number
              </template>
            </small>
            <small>Еnter phone number in open format</small>
          </div>

          <div class="form__radio">
            <p>Select your position</p>
            <div class="position">
              <p v-for="item in positions" :key="item.id">
                <input
                  class="radio"
                  type="radio"
                  name="col"
                  :id="item.id"
                  @change="form.position_id = item.id"
                />
                <label :for="item.id">{{ item.name }}</label>
              </p>
            </div>
            <small class="error">
              <template
                v-if="!$v.form.position_id.$model && $v.form.position_id.$dirty"
              >
                Please choose position
              </template>
            </small>
          </div>

          <div class="form__input">
            <p>Photo</p>
            <div class="form__foto" :class="{ invalid: $v.form.file.$error }">
              <span @change="setFile">
                {{ foto_upload }}
              </span>
              <input
                accept=".jpg, .jpeg"
                type="file"
                @input="change_value($event.target.value), setFile($event)"
                class="file"
                id="foto"
                ref="myFiles"
              />
              <small class="error">
                <template v-if="!$v.form.file.required && $v.form.file.$dirty">
                  Please add your photo
                </template>
                <template
                  v-else-if="$v.form.file.required && !$v.form.file.typeImage"
                >
                  The photo format must be jpeg/jpg type
                </template>
                <template
                  v-else-if="$v.form.file.required && !$v.form.file.sizeImage"
                >
                  The photo size must not be greater than 5 Mb
                </template>
              </small>
              <label
                class="label-foto"
                for="foto"
                :class="{ invalid1: $v.form.file.$error }"
                >Browse</label
              >
            </div>
          </div>

          <button type="submit" @click="btn = true" class="btn form__btn">
            Sing up now
          </button>
        </form>
      </div>
    </div>
    <Modal v-if="$store.state.isModal"></Modal>
  </section>
</template>

<script>
import Modal from "../modal/abz-modal";
import Axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { getTokenApi, sendFormApi } from "../api";
// ____________________________________________________________________________________________
const phonePattern = /^[+]{0,1}380([0-9]{9})$/;
// eslint-disable-next-line no-control-regex
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export default {
  name: "Form",
  components: {
    Modal,
  },

  data() {
    return {
      foto_upload: "Upload your photo",
      btn: false,
      submitStatus: "",
      positions: [],

      form: {
        name: "",
        email: "",
        phone: "",
        file: null,
        position_id: 0,
      },
    };
  },

  computed: {
    ...mapGetters(["GETTOKEN"]),
  },

  methods: {
    ...mapMutations([
      "SETTOKEN",
      "RESET_DATA_TO_STATE",
      "IS_MODAL",
      "SET_MODAL_RESPONS",
    ]),
    ...mapActions(["GET_CARTS_FROM_API"]),

    createFormData() {
      let formData = new FormData();
      formData.append("position_id", this.form.position_id);
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("photo", this.form.file);

      return formData;
    },

    // ================================POST=====================================
    async submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.submitStatus = "OK";
          const formData = this.createFormData();
          let token = this.GETTOKEN;
          let response;
          response = await sendFormApi(formData, token);

          if (response.status === 401) {
            const newTokenData = await getTokenApi();
            this.SETTOKEN(newTokenData);
            token = newTokenData.token;
            response = await sendFormApi(formData, token);
          }

          const responseData = await response.json();

          if (responseData.success) {
            this.RESET_DATA_TO_STATE(0);
            this.GET_CARTS_FROM_API();
          } else {
            // proccess server errors
          }

          this.SET_MODAL_RESPONS(responseData);
          this.IS_MODAL(true);
        } catch (e) {
          //console.log(e);
        }
      }
    },
    //================================================================================================
    change_value(value) {
      this.foto_upload = value ? value : "Upload your photo";
    },

    setFile(event) {
      this.form.file = event.target.files[0];
      this.$v.form.file.$touch();
    },

    phoneOnFocus() {
      if (!this.form.phone) {
        this.form.phone = "+380";
        this.$v.form.phone.$touch();
      }
    },
  },

  async mounted() {
    await Axios(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
      { method: "GET" }
    )
      .then((data) => {
        this.positions = data.data.positions;
      })
      .catch((error) => console.log(error));
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(60),
      },

      email: {
        required,
        minLength: minLength(4),
        validateEmail: (val) => {
          return emailPattern.test(String(val));
        },
      },

      phone: {
        required,
        validatePhone: (val) => {
          return phonePattern.test(String(val));
        },
      },

      position_id: {
        required,
      },

      file: {
        required,
        typeImage: (file) => {
          const imgType = "image/jpeg";
          if (file && file.type !== imgType) {
            return false;
          }
          return true;
        },

        sizeImage: (file) => {
          const maxSize = 5242880;
          if (file && file.size > maxSize) {
            return false;
          }
          return true;
        },
      },
    },
  },
};
</script>

<style lang="scss">
.form {
  &__body p {
    font-family: "PTSans";

    line-height: 28px;
  }

  & .container {
    padding-top: 14.8%;
    padding-bottom: 15.7%;
  }

  &__body small {
    display: block;
    font-size: 12px;
    margin: 1px 0 5px 1px;
  }

  &__h2 {
    text-align: center;
  }

  &__h2 > h2 {
    letter-spacing: normal;
  }

  &__h2 p {
    width: 90%;
    max-width: 446px;
    color: $text-color;
    font-family: $main-font;
    font-weight: 400;
    line-height: 24px;
    margin: 20px auto 24px;
  }

  &__form {
    max-width: 467px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .invalid {
      border: solid 1px red;
    }
    .invalid:focus {
      border: solid 1px #db3445;
      box-shadow: 0 0 5px #db3445;
    }

    .invalid1 {
      border-left: solid 1px red;
    }
    .invalid1:focus {
      border: solid 1px #db3445;
      box-shadow: 0 0 5px #db3445;
    }
  }

  &__input {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__input input {
    width: 100%;
    height: 38px;
    font-family: "PTSans";

    flex-grow: 1;
    padding-left: 12px;
    line-height: 28px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
    outline: none;
  }
  &__input input:focus {
    border: solid 1px #80bdff;
    box-shadow: 0 0 5px #80bdff;
  }

  &__input p {
    margin-bottom: 6px;
  }

  &__foto {
    width: 100%;
    height: 38px;
    font-family: "PTSans";
    font-size: 16px;
    padding-left: 12px;
    line-height: 34px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
    position: relative;
    //opacity: 0.5;
  }
  &__foto:focus-within {
    border: solid 1px #80bdff;
    box-shadow: 0 0 5px #80bdff;
  }
  &__foto.invalid:focus-within {
    border: solid 1px #db3445;
    box-shadow: 0 0 5px #db3445;
  }

  &__foto > span {
    color: #b2b9c0;
  }

  &__radio {
    width: 100%;
  }

  &__radio input {
    width: 16px;
    height: 16px;
    margin-right: 9px;
    margin-top: 2px;
    cursor: pointer;
    outline: none;
  }
  &__radio input:focus {
    border: solid 1px #122142;
    box-shadow: 0 0 5px #122142;
  }

  &__radio label {
    cursor: pointer;
  }

  &__btn {
    margin-top: 28px;
  }
}

.position {
  margin: 10.5px 0;
}

#foto {
  width: 0.4px;
  height: 0.4px;
  opacity: 0;
  position: absolute;
  z-index: -10;
}

label {
  font-family: "PTSans";

  line-height: 30px;
}

input[type="radio"]:checked:before {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #007bff;
}

input[type="radio"]:checked:after {
  content: "";
  display: block;
  position: relative;
  top: -11px;
  left: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #faf9fa;
}

.label-foto {
  height: 100%;
  width: 83px;
  text-align: center;
  background-color: #f8f7f5;
  border: 1px solid #d4d9de;
  border-radius: 0px 4px 4px 0px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.error {
  color: red;
}
.error:active {
  border: 10px solid #db3445;
}
</style>
