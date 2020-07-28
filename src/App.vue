<template>
  <div id="app" class="bg-primary mt-0 container-fluid">
    <img
      alt="Vue logo"
      src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
    />
    <div class="row justify-content-center">
      <div class="col-4 text-center">
        <form @submit.prevent="getRoverImages">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="query"
              placeholder="Enter apod title here...."
              v-model="query"
            />
          </div>
          <button type="submit" class="btn btn-block btn-secondary">SEARCH</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <results></results>
    </div>
  </div>
</template>

<script>
import Results from "./components/results";
export default {
  name: "App",
  data() {
    return {
      query: "curiosity",
    };
  },
  mounted() {
    this.getRoverImages();
  },
  computed: {},
  methods: {
    getRoverImages() {
      this.$store.dispatch("getImages", this.query);
    },
  },
  components: {
    Results,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
