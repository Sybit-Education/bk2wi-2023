<template>
    <b-card img-src="https://picsum.photos/300/200" img-top>
        <b-card-title>{{ event.name }}</b-card-title>
        <b-card-text>Lore ipsum </b-card-text>
    </b-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'EventItem',
    props: {
        event: {
            type: Object,
            required: true,
        }
    }
})
</script>
