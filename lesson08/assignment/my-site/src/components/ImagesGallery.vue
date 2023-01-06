<template>
    <div>
  
      <!-- Photo gallery using columns and responsive to stack for small screens -->

      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(image,id) in images" :key="id">
            <ImageComponent :image="image"/>
        </div>
      </div>

    </div>
</template>

<script>
import ImageComponent from "./ImageComponent.vue"

export default {
name: 'ImagesGallery',
components: {
    ImageComponent,
},
props: {
    images: {
        type: Object,
        required: true,
    }
},

}
</script>

<style>

</style>