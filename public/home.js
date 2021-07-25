// Adding functionality to home page

// Elements
const button = document.querySelector('#button')
const photo = document.querySelector('#photo')
const prevented_span = document.querySelector('#prevented-span')

// Constants 
const buttonURL = "http://192.168.29.163:3000/picture"
const timeBetweenClicks = 2500 // in miliseconds

// Sending a GIT request on button click
button.addEventListener('click', (e)=>{

    if(!(button.classList.contains('wait'))){
        button.classList.add('wait')
        
	
        fetch(buttonURL)
        .then((res, err)=>{
            console.log("Get request sent")
            return res.json()
        })
        .then((data, err)=>{
            if(err)  console.log(err)
            else console.log(data)
            return data["path"]
        })
        .then((path, err)=>{
            photo.src = path
        })

        setTimeout(()=>{
            button.classList.remove('wait')
        }, timeBetweenClicks)
        

    }
    else {
        console.log("Prevented");
	alert('wait few second')
    }

})
