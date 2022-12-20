<template>
    <div>

        <!-- main text with simple padding -->
        <main class="main pt-3 text-center">
        <h2>In this assignment, I'm exploring how to use Bootstrap</h2>
        <p class="lead">For the frist page, I'd like to explore a very simple form!</p>
        </main>

        <!-- just simple content to put on the home page. Using a mini form. -->

        <form>
            <div class="form-group text-center">
                <label for="name">If you have a pet...</label>
                <div class="text-center">
                    <input class="form-control text-center mx-auto m-2" style="width:300px" type="text" id="name"
                        placeholder="Enter your pet's name"></div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <div class="answer"></div>

            </div>
        </form>

        <!-- using a poppover here with the script at the bottom -->

        <div class="text-center mt-5">
            <hr>
            <p class="lead">Check this out!</p>
            <button type="button" class="btn btn-primary p-5" data-container="body" data-toggle="popover"
                data-trigger="focus" data-placement="top"
                data-content="Seven! He sits, shakes, hugs, kisses, dances, plays dead, and jumps through a hoop!">How many
                tricks do you think Winston knows?<br>Click here to find out!</button>
        </div>

        <!-- added a carousel for bonus points :)  -->
        <!-- I made it narrow so that it wouldn't take up too much space. -->
        <!-- <div id="carouselExampleControls" class="carousel slide carousel-fade my-slider" data-ride="carousel">
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
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> -->

        <!-- sticky footer and using jumbotron -->
        <footer class="footer bg-light text-center pt-3 pb-1">
            <p class="lead">Thanks for checking out my page!</p>
        </footer>

    </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
// $(function () {
//             $("[data-toggle='popover'").popover();
//         });

//         $(".popover-dismiss").popover({
//             trigger: "focus"
//         });

//         $(function () {
//             $('.alert').alert()
//         });
</script>

<style>


</style>