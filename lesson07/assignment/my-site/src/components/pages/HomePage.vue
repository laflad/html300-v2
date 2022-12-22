<template>
    <div>
        <!-- main text with simple padding -->
        <!-- Don't mind my lack of styling. This page is strictly for testing vue and boodstrap. :) -->
        
        <main class="main pt-3 text-center">
            <p class="lead">Exploring Vue and Bootstrap.</p>

            <p>What is your favoirte part about Vue?<br> {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
            <br><br>

            <!-- using a poppover with hover -->

            <div class="pop-hover">
                <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Seven! He sits, shakes, hugs, kisses, dances, plays dead, and jumps through a hoop!">
                    How many tricks do you think Winston knows? <br>
                    Hover over me to find out!
                </b-button>
            </div>

            <!-- using the v-if and v-else conditions -->

            <div id="app">
                <h1 v-if="!isHidden">Cats! Duh!</h1>
                <h1 v-else>Which pet is the best to have?</h1>
                <button v-on:click="isHidden = !isHidden">Click me to find out!</button>
            </div>
 
        </main>

        <!-- I made carousel narrow so that it wouldn't take up too much space. -->
        <!-- I put the carousel outside of main so that it doesn't get the same style treatement. -->

        <div id="carouselExampleIndicators" class="carousel slide my-slider" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../assets/images/IMG_0329.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/IMG_1902.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/IMG_7380.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>   

    </div>
</template>

<script>
export default {
    name: "HomePage",
    props: {
        msg: String
    },
    data () {
        return {
            isHidden: true,
            message: '',
        }
    }
}
</script>

<style>
.pop-hover {
    background-color: lightcyan;
    padding: 1rem;
    font-weight: bold;
}

</style>