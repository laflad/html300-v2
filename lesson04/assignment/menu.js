// I tried to create an innerHTML for the nav so that I only have to make updates in a single location, but I was struggling so I'll save the file here for a future assignment and focus on the actual assignment for now. :)

const topMenu = document.querySelector('.topnav')

    let mainNav = document.createElement('div')
    mainNav.innerHTML = `
        <div class="topnav">
            <a class="active" href="index.html">Home</a>
            <a href="404.html">Logo (coming soon)</a>
            <a href="colors.html">Colors</a>
            <a href="404.html">Voice (coming soon)</a>
            <a href="404.html">Images (coming soon)</a>
        </div>
        `
    topMenu.append(mainNav)

console.log(topMenu)