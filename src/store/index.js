import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		modal: {
			resp: "Oops, something went wrong, try again",
			title: "ERROR",
		},
    data: {
      count: 0,
    },
		showBtn: true,
		token: localStorage.getItem("token") || "",
		isModal: false,
  },
  mutations: {
    SET_DATA_TO_STATE: (state, data) => {
      if (data.count == data.total_users) {
        state.showBtn = false;
      }
      state.data = data;
		},

		SET_MODAL_RESPONS(state, { success, message }) {
			//console.log(state, { success, message })
			if (success) {
				state.modal.title = 'Congratulations';
				state.modal.resp = message;

			}
		},

		IS_MODAL(state,bool){state.isModal=bool},

		RESET_DATA_TO_STATE(state,data){state.data.count=data},

		SETTOKEN(state, { token }) {
			state.token = token;
			localStorage.setItem('token', state.token);
		},
  },
  actions: {
    GET_CARTS_FROM_API({ commit }, count = 3, page = 1) {
      if (window.innerWidth > 439) {
        count = 6 + this.state.data.count;
      } else {
        count = 3 + this.state.data.count;
      }
      return axios(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page${page}&count=${count}`,
        {
          method: "GET",
        }
      )
        .then((data) => {
          commit("SET_DATA_TO_STATE", data.data);
          //return data;
        })
        .catch((error) => {
          //console.log(error);
          return error;
        });
    },
  },
  modules: {},
  getters: {
		CARTS: state => state.data,
		GETTOKEN: state => state.token
  },
});
