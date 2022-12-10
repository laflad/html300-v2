// setup start of varriable

const petName = document.querySelector('.answer')

// create the event listen for when submit is pushed 
this.addEventListener('submit', function(event){
    event.preventDefault();

    // this make the pop up open with a message

    let petAlert = document.createElement('div')
    petAlert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show m-2 w-50 mx-auto" role="alert">
        That's a cool name!!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `

    // append the div element above unto the page 
    petName.append(petAlert)
})
