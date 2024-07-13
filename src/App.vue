<template>
  <v-app>
    <v-layout>
      <v-main>
        <router-view v-slot="{ Component }">
          <transition name="slide-left">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>