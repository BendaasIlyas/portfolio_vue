<template>
  <div class="contact">
    <v-img
          :src="require('@/assets/images/Waterfall.jpg')"
          class="white--text align-center"
          gradient="rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="800"
        >
    <v-snackbar v-model="snackbar" timeout="4000" top color="success">
      <span>You Send a Messaeg Correctly</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-container class="my-5">
        
      <v-layout row wrap justify-space-around>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-center ma-3" color="transparent">
            <v-responsive class="pt-4">
              <v-avatar size="200" class="grey lighten-2">
                  <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading blue--text"><h1> {{ person.name }} </h1></div>
              <div class="grey--text"><h3> {{ person.role }} </h3></div>
            </v-card-text>
            <v-card-actions>
              <v-flex class="mt-4 mb-3">
                <Contact_pop @sendContact ="snackbar = true"/>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    </v-img>
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