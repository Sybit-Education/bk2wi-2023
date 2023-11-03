<template>
    <div id ="contentbox">

        <ContentItem>
            <template #text>text</template>
        </ContentItem>

        <ContentItem>
            <template #text>text</template>
        </ContentItem>

        <ContentItem>
            <template #text>text</template>
        </ContentItem>

        <EventList />

    </div>
</template>

<script setup lang="ts">
import ContentItem from './ContentItem.vue';
import EventList from './events/EventList.vue'


</script>

<style scoped>
    #contentbox{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border: 1px solid
    }


</style>