<template>
  <div class="experience">
    <v-parallax
      dark
      height="800"
      src="@/assets/images/black-flat-screen-computer-monitor-1714208-min.jpg"
      jumbotron
    >
      <v-snackbar v-model="snackbar" timeout="4000" top color="success">
        <span>You Added a new item</span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <h1 class="subheading grey--text">Experience</h1>
      <v-flex class="mt-4 mb-3">
        <Add_new @addedNewEx="snackbar = true" />
      </v-flex>
      <v-container class="my-5">
        <v-card
          text
          class="pa-5 ma-3"
          v-for="exp in experiences"
          :key="exp.title"
        >
          <v-layout row wrap>
            <v-flex xs12 md3>
              <div class="caption grey--text">
                Company
              </div>
              <div>
                {{ exp.company }}
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div class="caption grey--text">
                Job Title
              </div>
              <div>
                {{ exp.title }}
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div class="caption grey--text">
                Date
              </div>
              <div>
                {{ exp.date }}
              </div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div>
                <v-chip small>
                  {{ exp.mission }}
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
