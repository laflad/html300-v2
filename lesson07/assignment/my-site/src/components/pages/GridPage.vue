<template>
  <div>
    <!-- about the page  -->
    <main class="main pt-3 text-center">
      <h2>Testing out grids in bootstrap!</h2>
      <p class="lead">Here are three different row sizes</p>

    <!-- simple grid with three different typs of rows -->
      <div class="grid text-center bg-light">
        <div class="row">
            <div class="col-lg-4 border p-3">space 1</div>
            <div class="col-lg-4 border p-3">space 2</div>
            <div class="col-lg-4 border p-3">space 3</div>
        </div>

        <!-- making these two below a little more responsive with an extra split before reaching sm  -->
        <div class="row">
            <div class="col-lg-8 col-md-6 border p-3">2/3 of the space</div>
            <div class="col-lg-4 col-md-6 border p-3">1/3 of the space</div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-4 border p-3">thin column</div>
            <div class="col-lg-10 col-md-8 border p-3">wide column</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'GridPage',
  props: {
    msg: String
  }
}
</script>