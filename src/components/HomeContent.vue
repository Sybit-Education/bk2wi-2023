<template>
    <main>
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

        </div>
    </main>

</template>

<script setup lang="ts">
import ContentItem from './ContentItem.vue';


</script>

<style scoped>
    #contentbox{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border: 1px solid
    }


</style>