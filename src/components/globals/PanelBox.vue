<template>
  <div>
    <v-card class="justify-center">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot name="action" />
          <div class="pl-4 pr-4 pt-2 pb-2">
            <slot> No slot content defined. </slot>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
