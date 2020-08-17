<template>
  <v-app class="grey lighten--4" id="inspire">
    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      class="md-5 mr-3 elevation-21"
      dark
      fab
      bottom
      right
      color="primary darken-3"
      fixed
      @click="top"
    >
      <v-icon>mdi-arrow-up-bold-circle-outline</v-icon>
    </v-btn>

    <Footer />

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      fab: false,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
#inspire {
  height: 100vh;
}
</style>
