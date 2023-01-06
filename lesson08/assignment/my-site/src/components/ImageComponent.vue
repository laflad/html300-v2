<template>
    <!-- Create image component to add to ImagesGallery so that images toggle behaves individually. -->

    <img @click="toggleShow" class="w-100 shadow-1-strong rounded-1 mb-4" :class="{ active:toggle}" :src="require(`@/assets/images/${image.img}`)" :alt="image.alt" :title="image.title">
</template>

<script>
import imagesMixin from "../mixins/imagesMixin"

export default {
mixins: [
    imagesMixin,
],

name: 'ImagesGallery',
props: {
    image: {
        type: Object,
        required: true,
    }
},

}
</script>

<style>
.active {
    outline: 5px solid teal;
    box-shadow: 8px 8px 15px grey;
}
</style>