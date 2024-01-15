<template>
    <router-link :to="detailUrl">
        <b-card :img-src="image" img-top>
            <b-card-title>{{ verleih.name }}</b-card-title>
        </b-card>
    </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import { useVerleihItemStore } from '@/stores/verleihItem'

export default defineComponent({
    name: 'VerleihItem',
    props: {
        verleih: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(useVerleihItemStore, {
            imageById: (state) => state.imageById
        }),    
        image() : string {
            return this.imageById(this.verleih.id) as string;
        },
        detailUrl () {
            return '/verleih/' + this.verleih.id
        }
    }
})
</script>