<template>
  <div class="experience">
    <v-parallax
      dark
      height="100%"
      class="bgex"
      jumbotron
    >
      <v-snackbar v-model="snackbar" timeout="4000" top color="success">
        <span>You Added a new item</span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <v-flex class="mt-16 mb-3 mr-4">
        <Add_new @addedNewEx="snackbar = true" />
      </v-flex>
      <v-container class="my-5 pa-0">
        <v-card
          text
          class="pa-5 ma-3"
          v-for="exp in experiences"
          :key="exp.title"
          color="transparent"
        >
          <v-layout row wrap class="caption blue--text">
            <v-flex xs12 md3>
              <div >
                <h1> Company</h1>
              </div>
              <div class="white--text">
                <h3> {{ exp.company }} </h3>
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div>
                <h1> Job Title</h1>
              </div>
              <div class="white--text">
                <h3> {{ exp.title }} </h3>
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div>
                <h1> Date</h1>
              </div>
              <div class="white--text">
                <h3> {{ exp.date }} </h3>
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div>
                <v-chip small color="green">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="green"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        MISSION
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline grey lighten-2">
                        MISSION in {{ exp.company }}
                      </v-card-title>
                      <v-card-text>
                        {{ exp.mission }}
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
import Add_new from "@/components/Add_new";
import db from "@/fb";

export default {
  components: {
    Add_new,
  },
  data() {
    return {
      experiences: [],
      snackbar: false,
    };
  },
  created() {
    db.collection("experiences").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.experiences.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>

<style>
.bgex {
  width: 100%;
  height: auto;
  background: linear-gradient(to left, transparent, black),url("../assets/images/black-flat-screen-computer-monitor-1714208-min.jpg")
    no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
</style>