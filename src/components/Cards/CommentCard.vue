<script setup lang="ts">
defineProps<{
  person: string;
  image: string;
  comment: string;
  location: string;
}>();
</script>

<template>
  <v-card
    color="#49BBBD"
    max-width="400"
    class="mx-auto text-white"
  >  
    <v-card-text class="text-h5 py-2">"{{ comment }}".</v-card-text>
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="grey-darken-3" :image="image" />
        </template>
        <v-list-item-title>{{ person }}</v-list-item-title>
        <v-list-item-subtitle>{{ location }}</v-list-item-subtitle>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>