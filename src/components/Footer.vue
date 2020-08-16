<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="#0c0c0c lighten-1 grey--text text-center col-md-12 col-sm-12 col-xs-12"
    >
      <v-card-text>
        <v-icon>mdi-copyright</v-icon>
        <strong>
          {{ new Date().getFullYear() }} — ILYAS BENDAAS. All rights
          reserved.</strong
        >
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 grey--text" icon>
          <!-- <v-icon size="24px">{{ icon }}</v-icon> -->
          <a :href="icon.url" :target="icon.target"
            ><v-icon size="24px">{{ icon.name }}</v-icon></a
          >
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "mdi-facebook",
        url: "https://web.facebook.com/Bendaasilyas",
        target: "_blank",
      },
      {
        name: "mdi-linkedin",
        url: "https://www.linkedin.com/in/ilyas-bendaas-834337107/",
        target: "_blank",
      },
      {
        name: "mdi-instagram",
        url: "https://www.instagram.com/bendaasilyas/",
        target: "_blank",
      },
    ],
  }),
};
</script>
