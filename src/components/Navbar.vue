<template>
  <v-card class="mx-auto overflow-hidden" width="256" tile>
    <v-app-bar flat app color="transparent" dark id="inspire" hide-on-scroll>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text--uppercase grey--text">
        <span class="font-weight-light">Computer</span>
        <span>Engineer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-for="link in links" :key="link.text">
        <v-btn color="primary" dark router :to="link.route">
          {{ link.text }}
        </v-btn>
      </div>
      
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-system-bar></v-system-bar>
      <v-list>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="/images/IMG-20200215-WA0018c.jpg" alt="Ilyas Bendaas" />
            </v-avatar>
          </v-flex>
        </v-layout>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              ILYAS BENDAAS
            </v-list-item-title>
            <v-list-item-subtitle
              >contact@ilyasbendaas.ovh</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        {
          icon: "mdi-card-account-details",
          text: "Experience",
          route: "/experience",
        },
        { icon: "mdi-cast-education", text: "Education", route: "/education" },
        { icon: "mdi-contacts", text: "Contact", route: "/contact" },
      ],
      sublinks: [
        {
          icon: "mdi-home",
          text: "About Me",
          route: "/home/about",
        },
        { icon: "mdi-home", text: "Skills", route: "/home/skills" },
        {
          icon: "mdi-home",
          text: "Hobbies",
          route: "/home/hobbies",
        },
      ],
    };
  },
};
</script>

<style>
#inspire {
  background: none;
}
</style>