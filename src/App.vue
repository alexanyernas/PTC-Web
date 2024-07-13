<template>
  <v-app>
    <v-layout>
      <v-main>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>