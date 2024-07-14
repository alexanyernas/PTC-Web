<script setup lang="ts">
// Vue Components
import CommentCard from '@/components/Cards/CommentCard.vue';

interface Comment {
    image: string;
    person: string;
    comment: string;
    location: string;
}

const comments = <Comment[]>[
    {
        image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        person: 'Alexanyer Naranjo',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        location: 'Universidad Central de Venezuela'
    },
    {
        image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        person: 'Alejandra Giannattasio',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        location: 'Universidad Central de Venezuela'
    },
    {
        image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        person: 'Rafael Contreras',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        location: 'Universidad Central de Venezuela'
    },
    {
        image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        person: 'Yarima Contreras',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        location: 'Universidad Central de Venezuela'
    }
];
</script>

<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12">
                <p class="text-center font-weight-bold text-h5 dark-blue-color">¿Qué opinan nuestros estudiantes?</p>
            </v-col>
            <v-col cols="12" lg="6" v-for="(comment, index) in comments" :key="index">
                <comment-card 
                    :image="comment.image"
                    :person="comment.person"
                    :comment="comment.comment"
                    :location="comment.location"
                />
            </v-col>
        </v-row>
    </v-container>
</template>