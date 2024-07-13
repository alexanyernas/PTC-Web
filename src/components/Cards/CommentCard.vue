<template>
    <v-card
        color="#49BBBD"
        max-width="400"
        class="mx-auto text-white"
        prepend-icon="mdi-lightbulb-on"
    >
      <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>
      </template>
  
      <v-card-text class="text-h5 py-2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
          </template>
  
          <v-list-item-title>Lorem Ipsum</v-list-item-title>
          <v-list-item-subtitle>Universidad Central de Venezuela</v-list-item-subtitle>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </template>