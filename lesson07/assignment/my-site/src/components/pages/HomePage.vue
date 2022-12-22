<template>
    <div>

        <!-- main text with simple padding -->
        <main class="main pt-3 text-center">
        <p class="lead">For the frist page, I'd like to explore popover, toggles, and a carousel!</p>

        <!-- just simple content to put on the home page. Using a mini form. -->

        <!-- <form>
            <div class="form-group text-center">
                <label for="name">If you have a pet...</label>
                <div class="text-center">
                    <input class="form-control text-center mx-auto m-2" style="width:300px" type="text" id="name"
                        placeholder="Enter your pet's name"></div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <div class="answer"></div>

            </div>
        </form> -->

        <!-- using a poppover here with the script at the bottom -->

        <div class="text-center mt-5">
            <button type="button" class="btn btn-primary p-5" data-container="body" data-toggle="popover"
                data-trigger="focus" data-placement="top"
                data-content="Seven! He sits, shakes, hugs, kisses, dances, plays dead, and jumps through a hoop!">How many
                tricks do you think Winston knows?<br>Click here to find out!</button>
        </div>

        <!-- using the v-if and v-else conditions -->

        <div>

        <h1 v-if="awesome">Which pet is the best?</h1>
        <h1 v-else>Cats! duh!</h1>
        <button @click="awesome = !awesome">Find out!</button>
        </div>


        <h2>trying popper below this</h2>
        
        <!-- <popper
            trigger="clickToOpen"
            :options="{
                placement: 'top',
                modifiers: { offset: {offset: '0,10px' }}
            }">
            <div class="popper">
                Stuff here
            </div>
            <button slot="reference">
                refrence here
            </button>
        </popper> -->

        <!-- different approach here. Also not working. -->

        <!-- <div id="app">
            <button id="button" aria-describedby="tooltip">New Button</button>
            <div id="tooltip" role="tooltip">Woah!</div>
        </div> -->
        <h2>trying popper above this</h2>

        <!-- I made carousel narrow so that it wouldn't take up too much space. -->
 
    </main>

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
// import Popper from '@popperjs/core';
// import Alert from '../../scripts/alert.js'

// import { createPopper } from '@popperjs/core';

// const popcorn = document.querySelector('#popcorn');
// const tooltip = document.querySelector('#tooltip');

// createPopper(popcorn, tooltip, {
//     placement: 'top',
// });

export default {
    name: "HomePage",
    props: {
        msg: String
    },
    // components: { 
    //     'alert': Alert,
    //     'popper': Popper
    // },
    // data() {
    //     const button = document.querySelector('#button');
    //     const tooltip = document.querySelector('#tooltip');

    //     Popper.createPopper(button, tooltip);

    //     return {
    //     };
    // }
}

</script>

<style>


</style>