<template>
  <div class="card m-1 p-2 shadow-lg rover-image">
    <h5>{{imageData.rover.name}}</h5>
    <h5>{{imageData.camera.full_name}}</h5>
    <img class="img-fluid" :src="imageData.img_src" alt="image" />
  </div>
</template>

<script>
export default {
  name: "rover-image",
  props: ["imageData", "index"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    // selectImage() {
    //   this.$store.dispatch("selectImage", this.imageData);
    // },
  },
  components: {},
};
</script>