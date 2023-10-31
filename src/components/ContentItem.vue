<template>
    <div class = "item">
        <slot name="picture"></slot>
        <slot name="text"></slot>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
    .item{
        border: 1px solid;
        width: 25%;
        text-align: center;
        margin: auto;
    }
</style>