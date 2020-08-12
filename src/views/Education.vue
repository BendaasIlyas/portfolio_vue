<template>
  <div class="education">
    <v-parallax
    id="img1"
    dark
    height="800"
    src="@/assets/images/text-on-shelf-256417-min.jpg"
    jumbotron
  >
    <v-snackbar v-model="snackbar" timeout="4000" top color="success">
      <span>You Added a new item</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <h1 class="subheading grey--text">Education</h1>
    <v-flex class="mt-4 mb-3">
      <Add_new @addedNewEd ="snackbar = true"/>
    </v-flex>
    <v-container class="my-5">
      <v-card text class="pa-5 ma-3" v-for="ed in educations" :key="ed.title">
        <v-layout row wrap>
          <v-flex xs12 md3>
            <div class="caption grey--text">
              Company
            </div>
            <div>
              {{ ed.company }}
            </div>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <div class="caption grey--text">
              Job Title
            </div>
            <div>
              {{ ed.title }}
            </div>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <div class="caption grey--text">
              Date
            </div>
            <div>
              {{ ed.date }}
            </div>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <div>
              <v-chip small>
                {{ ed.mission }}
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
      educations: [],
      snackbar: false
    };
  },
  created(){
    db.collection('educations').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.educations.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
};
</script>
