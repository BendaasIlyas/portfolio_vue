<template>
  <v-row justify="end">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Add New
    </v-btn>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Add New</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Company"
              v-model="company"
              prepend-icon="mdi-clipboard-edit"
              :rules="companyRules"
            ></v-text-field>
            <v-text-field
              label="Job title"
              v-model="title"
              prepend-icon="mdi-subtitles"
              :rules="jobRules"
            ></v-text-field>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>

            <v-textarea
              label="Mission"
              v-model="mission"
              prepend-icon="mdi-folder-information"
              :rules="missionRules"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="add" :loading="loading">
            Add New
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from '@/fb';

export default {
  data() {
    return {
      dialog: false,
      company: "",
      title: "",
      date: new Date().toISOString().substr(0, 10),
      mission: "",
      menu: false,
      companyRules: [
        (v) => !!v || "Name of company is required",
        (v) =>
          (v && v.length <= 20) ||
          "Name of company must be less than 20 characters",
      ],
      jobRules: [
        (v) => !!v || "Job title is required",
        (v) =>
          (v && v.length <= 20) || "Job title must be less than 20 characters",
      ],
      missionRules: [(v) => !!v || "Job Mission is required"],
      loading: false
    };
  },
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const experience = {
          title: this.title,
          company: this.company,
          date: this.date,
          mission: this.mission
        }

        db.collection('experiences').add(experience).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit('addedNew');
        });
      }
    },
  },
};
</script>
