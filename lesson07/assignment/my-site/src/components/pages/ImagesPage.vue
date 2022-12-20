<template>
    <div>

      <!-- about the page  -->
      <main class="main m-2 w-50 mx-auto text-center " style="width:800px;">
          <h1>Welcome to the images page</h1>
          <p>Meet my two little muses, Winston and Murphy.</p>
      </main>

      <!-- Photo gallery using columns and responsive to stack for small screens -->
      <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img src="../../assets/images/IMG_0808.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="Winston smelling a flower" />

              <img src="../../assets/images/IMG_0329.jpg" class="w-100 shadow-1-strong rounded mb-4"
                  alt="Winston being cute upsidedown" />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
              <img src="../../assets/images/IMG_7380.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="Winston cleaning Murphy" />

              <img src="../../assets/images/IMG_1902.jpg" class="w-100 shadow-1-strong rounded mb-4"
                  alt="Murphy's catwalk in the snow" />

              <img src="../../assets/images/IMG_7286.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="Kitty cuddles" />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
              <img src="../../assets/images/IMG_5742.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="Muprhy in a box" />

              <img src="../../assets/images/IMG_7731.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="Winston dreaming" />
          </div>
      </div>

      <!-- adding a few breaks so the footer doesn't cover up the last image -->
      <br><br><br>

      <!-- sticky footer and using jumbotron -->
      <footer class="footer bg-light text-center pt-3 pb-1">
          <p class="lead">Thanks for checking out my page!</p>
      </footer>

    </div>
</template>

<script>
export default {
  name: 'ImagesPage',
  props: {
    msg: String
  }
}
</script>

