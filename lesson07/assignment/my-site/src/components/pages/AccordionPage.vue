<template>
    <div>
      <main class="main text-center">
        <h1>Bootstrap makes accordions easy!</h1>
        <p>For this one, I'll explore the benefits of type of pets</p>
      

  <!-- create an accordion with some drop downs -->

  <!-- Accordion for cats -->
  <div class="accordion m-5 w-50 mx-auto" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="false" aria-controls="collapseOne">
          Why cats are the best!
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <ul class="list-group list-group-flush list-style">
            <li class="list-text" v-for="item in itemsCats"
                :key="item.id">
              {{ item.message }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Accordion for dogs -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
          aria-expanded="false" aria-controls="collapseTwo">
          Why dogs are also awesome!
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <ul class="list-group list-group-flush list-style">
            <li v-for="item in itemsDogs"
                :key="item.id">
              {{ item.message }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Accordions for plants -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Want even lower maintence?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <ul class="list-group list-group-flush list-style">
            <li v-for="item in itemsPlants"
                :key="item.id">
              {{ item.message }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsCats: [ 
        { message: 'They clean themselves.'}, 
        { message: 'They catch bugs and rodents.'}, 
        { message: 'They dont bark.'}, 
        { message: 'They are low maintence.'}, 
        { message: 'You can leave them alone for a full day.'}, 
        { message: 'You can actually teach them trick! Ask Winston!'} 
      ],
      itemsDogs: [
        { message: 'They instantly love you without needing to earn it.'},
        { message: 'They are fun to do outdoor adventures with.'},
        { message: 'They guard your house.'},
        { message: 'They encourage you to move around.'},
        { message: 'The are social magnets.'},
        { message: 'They help brighten our mood and reduce anxiety.'}
      ],
      itemsPlants: [
        { message: 'Although, I did managed to kill two plants this year, oops!'}
      ]
    }},
  name: 'AccordionPage',
  props: {
    msg: String
  },

}
</script>

<style>
.list-style {
  text-align: left !important;
  padding-left: 1rem;
}

</style>