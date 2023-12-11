<template>
    <router-link :to="detailUrl">
    <b-card :img-src="image" img-top>
        <b-card-title>{{ bar.name }}</b-card-title>
    </b-card>
</router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import { useBarItemStore } from '@/stores/barItem'

export default defineComponent({
    name: 'BarItem',
    props: {
        bar: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(useBarItemStore, {
            imageById: (state) => state.imageById
        }),
        image(): string {
            return this.imageById(this.bar.id) as string;
        },
        detailUrl() {
            return '/bar/' + this.bar.id
        }
    }
})
</script>