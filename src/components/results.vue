<template>
  <div class="results col-12">
    <h1>RESULTS</h1>
    <div class="row justify-content-center">
      <roverImage v-for="(image,i) in images" :imageData="image" :index="i" :key="image.id" />
    </div>
  </div>
</template>

<script>
import RoverImage from "./roverImage";
export default {
  name: "Results",
  data() {
    return {};
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  methods: {},
  components: {
    RoverImage,
  },
};
</script>