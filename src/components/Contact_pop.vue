<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Message
    </v-btn>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Contact Me</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="contact">
            <v-text-field
              label="Your Name"
              :rules="nameRules"
              v-model="name"
              prepend-icon="mdi-account-details"
            ></v-text-field>
            <v-text-field
              label="Your Email"
              :rules="emailRules"
              v-model="email"
              prepend-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              label="Subject"
              v-model="subject"
              prepend-icon="mdi-text-subject"
            ></v-text-field>
            <v-textarea
              label="Message"
              v-model="message"
              prepend-icon="mdi-comment"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="send" :loading="loading">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      dialog: false,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      subject: "",
      message: "",
      loading: false
    };
  },
  methods: {
    send() {
      if (this.$refs.contact.validate()) {
        this.loading = true;
        const contact = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        db.collection("contacts")
          .add(contact)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("sendContact");
          });
      }
    },
  },
};
</script>
