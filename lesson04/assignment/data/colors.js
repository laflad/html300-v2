// create a data list to populate in js for the color page.

const colorsJSON = `[
    {
        "colorName": "Lagoon",
        "colorSimple": "lagoon",
        "colorHex": "006887",
        "colorRGB": "0, 104, 135"
    },
    {
        "colorName": "Mist",
        "colorSimple": "mist",
        "colorHex": "8cd7ed",
        "colorRGB": "140, 215, 237"
    },
    {
        "colorName": "Sky",
        "colorSimple": "sky",
        "colorHex": "288bf3",
        "colorRGB": "40, 139, 243"
    },
    {
        "colorName": "Abyss",
        "colorSimple": "abyss",
        "colorHex": "1e2829",
        "colorRGB": "48, 47, 45"
    },
    {
        "colorName": "Arcadia",
        "colorSimple": "arcadia",
        "colorHex": "33302c",
        "colorRGB": "51, 48, 44"
    },
    {
        "colorName": "Whisper",
        "colorSimple": "whisper",
        "colorHex": "dce4e6",
        "colorRGB": "171, 177, 178"
    }
]`

// Next we parse the JSON data for js

const colors = JSON.parse(colorsJSON)

// keeping the console log here to turn on off if needed
// console.log(colors)

// Call for tag on the html page for where this will appear

const colorContainer = document.querySelector('.brand-colors')

// create the loop to call for the data to populate on the page. 

colors.forEach(function(el){

    let tiles = document.createElement('div')
    tiles.innerHTML = `
        <div class="colorbox color${el.colorSimple}">
            <div>
                <h3>${el.colorName}</h3>
                <p>Hex: #${el.colorHex}</p>
                <p>RGB: ${el.colorRGB}</p>
            </div>
        </div>
    `
    colorContainer.append(tiles)
})