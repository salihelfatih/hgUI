<template>
  <div>
    <v-card>
      <v-card-title>Contact us</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-textarea v-model="message" label="Message" required></v-textarea>
          <v-btn block dark color="deep-purple darken-4" @click="submit"
            >Submit</v-btn
          >
          <div v-if="success">
            <p>Thanks for your message!</p>
          </div>

          <div v-if="error">
            <p>Sorry, there was an error sending your message.</p>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script></script>

<style scoped></style>
