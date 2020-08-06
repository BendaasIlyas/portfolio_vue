<template>
  <div class="team">
    <v-snackbar v-model="snackbar" timeout="4000" top color="success">
      <span>You Send a Messaeg Correctly</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <h1 class="subheading grey--text">Contact</h1>

    <v-container class="my-5">
        
      <v-layout row wrap justify-space-around>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="200" class="grey lighten-2">
                  <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span class="">Message</span>
              </v-btn>
              <v-flex class="mt-4 mb-3">
                <Contact_pop @sendContact ="snackbar = true"/>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
import Contact_pop from '@/components/Contact_pop';

export default {
  components: {
    Contact_pop
  },
  data() {
    return {
      team: [
        { name: 'ILYAS BENDAAS', role: 'Network Administrator, Web developer', avatar: '/images/IMG-20200215-WA0018c.jpg' },
      ],
      snackbar: false
    }
  }
}
</script>