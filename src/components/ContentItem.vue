<template>
  <div class="item">
    <slot name="picture"></slot>
    <slot name="text"></slot>

    <BCard
      title= "Test"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      id="ContentItem"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>

      <BButton href="#" variant="primary">Go somewhere</BButton>
    </BCard>

  

  </div>
</template>

<script setup lang="ts">

 
const props = defineProps(["title"])





</script>

<style scoped>

  .item{
    margin: 10px;
  }

</style>
