// first I need to bring in the data from my JSON file. (I tried a number of online sources to fetch but it wasn't working right. I hope to learn how to in a future lesson)

const dataJSON = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`

// next we will parse the data to use in js

const cards = JSON.parse(dataJSON)

console.log(cards)

const container = document.querySelector('.template-hook')


cards.forEach(function(el){
    
    let list = document.createElement('div')
    list.innerHTML = `
        <main class="main">
        <div class="card">
            <div class="leftside">
                <img class="profile-pic" src="img/headshot.jpg" alt="photo of the cutest little worker">
                <h2>${el.name}</h2>
                <p class="job">${el.jobTitle}</p>
            </div>
            <div class="rightside">
                <div class="lineitem">
                    <p class="category">Company: </p>
                    <p class="detail">${el.company}</p>
                </div>
                <div class="lineitem">
                    <p class="category">Experience: </p>
                    <p class="detail">${el.experience}</p>
                    </div>
                <div class="lineitem">
                    <p class="category">School: </p>
                    <p class="detail">${el.school}</p>
                </div>
                <div class="lineitem">
                    <p class="category">Major: </p>
                    <p class="detail">${el.major}</p>
                </div>
                <div class="lineitem">
                <p class="link"><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1"
                viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
                    fill="#007BB5" />
                    <rect fill="#FFFFFF" height="14" width="4" x="7" y="11" />
                <path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF" />
                <circle cx="9" cy="8" fill="#FFFFFF" r="2" /></svg>
                ${el.email}</p>
                </div>
            </div>
        </div>
        </main>
    `
    
    container.append(list)
})
