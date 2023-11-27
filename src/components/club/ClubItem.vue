<template>
    <router-link :to="detailUrl">
        <b-card :img-src="image" img-top>
            <b-card-title>{{ club.name }}</b-card-title>
            <b-card-text>Lore ipsum </b-card-text>
        </b-card>
    </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import { useClubItemStore } from '@/stores/clubItem'

export default defineComponent({
    name: 'ClubItem',
    props: {
        club: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(useClubItemStore, {
            imageById: (state) => state.imageById
        }),    
        image() : string {
            return this.imageById(this.club.id) as string;
        },
        detailUrl () {
            return '/club/' + this.club.id
        }
    }
})
</script>