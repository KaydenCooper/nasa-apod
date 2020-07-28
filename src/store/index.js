import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const _api = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/",
  timeout: 3000
})
let apiKey = "?sol=1000&api_key=gq8eO6qnAK0utg3PH58vTK3BV0LPMR0xlEdckdI4"
export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    setImages(state, images) {
      state.images = images
    }
  },
  actions: {

    async getImages({ commit }, query) {
      try {
        let res = await _api.get(query + "/photos" + apiKey)
        console.log(res);
        commit("setImages", res.data.photos)
      } catch (error) {
        console.error(error);
      }
    }

  },
  modules: {
  }
})
