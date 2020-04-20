console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const imgcon = document.getElementById('dog-image-container');
    const dogB = document.getElementById('dog-breeds');
    fetch(imgUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //challange 1
            console.log(json);
            json.message.forEach(item => {
                let tempImg = new Image();
                tempImg.src = item;
                imgcon.appendChild(tempImg);
            });
        })

    fetch(breedUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //challange 2
            for (let key of Object.keys(json.message)) {
                let dogBName = document.createElement("li");
                dogBName.appendChild(document.createTextNode(key));
                dogB.appendChild(dogBName);
            }
            //challange 3
            document.querySelectorAll("li").forEach(function (e) {
                e.addEventListener('click', function () {
                    this.style.color = "red";
                })
            });
        })

    //challange 4 
    const dropsort = document.getElementById('breed-dropdown');
    dropsort.addEventListener("click", function () {
        const allLI = document.querySelectorAll("li")
        allLI.forEach(item => {
            if (item.textContent[0] !== dropsort.value) {
                item.style.display = 'none';
            }
            else {
                item.style.display = 'block';
            };
        })
    })
})