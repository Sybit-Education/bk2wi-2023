<template>
    <b-card>
        <b-card-title>{{ event.name }}</b-card-title>
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