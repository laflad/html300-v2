<template>
  <div>
    <!-- about the page  -->
    <main class="main m-2 w-50 mx-auto text-center " style="width:800px;">
      <h1>Welcome to the images page</h1>
      <p>Meet my two little muses, Winston and Murphy.</p>
    </main>

    <ImagesGallery :images="data" />

    <!-- adding a few breaks so the footer doesn't cover up the last image -->
    <br><br><br>

  </div>
</template>

<script>
import ImagesGallery from "../components/ImagesGallery.vue"
// import imagesMixin from "../mixins/imagesMixin"

export default {
  name: 'ImagesPage',
  components: {
    ImagesGallery,
  },
  // mixins: [
  //   imagesMixin
  // ],
  data() {
      return {
        data: [
          { img: 'IMG_7380.jpg', alt: 'Winston cleaning Murphy', title: 'Brotherly Love'},
          { img: 'IMG_5742.jpg', alt: 'If Murphy had an album cover this would be it', title: 'Murphy the Musician'},
          { img: 'IMG_1902.jpg', alt: 'Murphy doing his catwalk in the snow', title: 'Snow Walk'},
          { img: 'IMG_0329.jpg', alt: 'Winston being all cute and stuff', title: 'Too Cute to Ignore'},
          { img: 'IMG_7723.jpg', alt: 'Winston day dreaming under sunrays', title: 'Day Dreamer'},
          { img: 'IMG_7731.jpg', alt: 'Winston sound asleep', title: 'Sweet Baby Boy'},
        ]
      }
    },
}
</script>

