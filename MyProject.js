let blogs = []

function addBlog() {

    let title = document.getElementById('Pname').value;
    let start = document.getElementById('startDate').value;
    let end = document.getElementById('endDate').value;
    let content = document.getElementById('text1').value;
    
    
    
    let inputTechnologies=Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map((elem) => elem.value);
    console.log(inputTechnologies)
    
    
    let image = document.getElementById('input-blog-image').files[0];
   
    image = URL.createObjectURL(image)

    let blog = {
        title: title,
        start: start,
        end: end,
        content: content,
        inputTechnologies: inputTechnologies,
        image: image,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()

}

function renderBlog() {
    
    let blogContainer = document.getElementById('card')

    blogContainer.innerHTML = `<div class="card1">
    <img src="assets/card1.png">
    <h4>Dumbways Mobile App - 2022</h4>

    <p>Durasi : 3 Bulan</p>

    <p class="p2">App that use for dumbways student, it was deployed and can downloaded on play store.  Happy Download</p>
    <div class="image">
        <img src="assets/googleplay.png">
        <img src="assets/android-logo.png">
        <img src="assets/java.png">
    </div> 
    <div class="buttonEnd">
        <div class="left-side">
            <a href="#">Edit</a>
        </div>
        <div class="right-side">
            <a href="#">Delete</a>
        </div>
    </div>
</div>`

    for(let i = 0; i < blogs.length; i++){

    blogContainer.innerHTML += `<div class="card1">
    <img src="${blogs[i].image}">
    <h4><a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
    </h4>

    <p>Durasi : ${getDistanceTime(blogs[i].start,blogs[i].end)}
    </p>

    ${getFullTime(blogs[i].postedAt)}
    <p class="p2">${blogs[i].content}</p>
    <div class="image">
    <i class="${blogs[i].inputTechnologies[0]}"></i>
    <i class="${blogs[i].inputTechnologies[1]}"></i>
    <i class="${blogs[i].inputTechnologies[2]}"></i>
    </div> 
    <div class="buttonEnd">
        <div class="left-side">
        <a href="#">Edit</a>
    </div>
    <div class="right-side">
        <a href="#">Delete</a>
    </div>
</div>
</div>`
    }
}


let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
   ]

function getFullTime (time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return fullTime
}

function getDistanceTime (start,end) {

    let timesStart = new Date (start)
    let timesEnd = new Date (end)

    // console.log(timesStart)
    // console.log(timesEnd)
    // console.log(timesEnd-timesStart)

    let distance = timesEnd - timesStart

    let dayDistance = Math.floor(distance/(23 * 60 * 60 * 1000)) //convert to day
    console.log(dayDistance)

    if (dayDistance != 0) {
        return dayDistance + 'Day'

    } else {
        let hourDistance = Math.floor(distance/(60 * 60 * 1000))
        
        if (dayDistance != 0) {
        return hourDistance + 'hour ago'

            } else {
             let minuteDistance = Math.floor(distance/(60 * 1000))

             if (dayDistance != 0) {
            return minuteDistance + 'minute ago'
           
            }else {
                let secondDistance = Math.floor(distance/ 1000)
                return secondDistance + 'second ago'

            }
        }
    }

}

setInterval(() => {
},1000) // tiap detik 


