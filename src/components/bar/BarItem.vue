<template>
    <b-card img-src="https://picsum.photos/300/200" img-top>
        <b-card-title>{{ bar.name }}</b-card-title>
    </b-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'BarItem',
    props: {
        bar: {
            type: Object,
            required: true,
        }
    }
})
</script>