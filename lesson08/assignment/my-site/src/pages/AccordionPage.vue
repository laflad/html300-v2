<template>
  <div>
    <main class="main text-center">
      <h1>Bootstrap makes accordions easy!</h1>
      <p>For this one, I'll explore the benefits of type of pets</p>

      <!-- Accordion loop -->
      <!-- Thank you for your help with this one!! Much appreciated! -->
      
      <div class="accordion m-5 w-50 mx-auto" id="accordionExample">
        <div class="accordion-item" v-for="item in items"
              :key="item.id">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+item.id" aria-expanded="false" aria-controls="collapseOne" >
              {{ item.title }}
          </button>
          <div :id="'collapse'+item.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul v-for="(detail, id) in item.details" :key="id" class="list-group list-group-flush list-style">
                <li>{{ detail }}</li>
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
      items: [ 
        { 
          id: 1,
          title: 'Why cats are the best!',
          details: [
            'They clean themselves.',
            'They catch bugs and rodents.',
            'They dont bark.',
            'They are low maintence',
            'You can leave them alone for a full day',
            'You can actually teach them trick! Ask Winston!',
          ]
        },
        {
          id: 2,
          title: 'Why dogs are also awesome!',
          details: [
              'They instantly love you without needing to earn it.',
              'They are fun to do outdoor adventures with.',
              'They guard your house.',
              'They encourage you to move around.',
              'The are social magnets.',
              'They help brighten our mood and reduce anxiety.',
          ]
        },
        {
          id: 3,
          title: 'Want even lower maintence?',
          details: [ 
            'Get a plant!',
          ]
        },
      ]
    }
  },
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