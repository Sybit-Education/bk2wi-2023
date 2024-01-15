<template>
    <b-card :img-src="image" img-top>
        <b-card-title>{{ event.name }}</b-card-title>
        <!-- <b-card-text>{{event.beschreibung}} </b-card-text> -->
    </b-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import { useEventItemStore } from '@/stores/eventItem'


export default defineComponent({
    name: 'EventItem',
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(useEventItemStore, {
            imageById: (state) => state.imageById
        }),    
        image() : string {
            return this.imageById(this.event.id) as string;
        },
        detailUrl () {
            return '/event/' + this.event.id
        }
    }
})
</script>
