// main.js

// volume controls
const vol_slider = document.getElementById("volume-slider")
const vol_number = document.getElementById("volume-number")
const vol_image = document.getElementById("volume-image")
// Sound controls
const sounds = document.getElementsByName("radio-sound")
const honk_btn = document.getElementById("honk-btn")
const audio = document.getElementById("horn-sound")


// Update the volume number when adjusting the slider
vol_slider.addEventListener('input', e => {
    let val = vol_slider.value
    vol_number.value = val
    updateVolImage()
})

// Update the volume slider when adjusting the number
vol_number.addEventListener('input', e => {
    let val = Math.min(vol_number.value, 100)
    vol_slider.value = val
    updateVolImage()
})

honk_btn.addEventListener('click', e => {
    e.preventDefault()

    const sound=document.querySelector('input[name="radio-sound"]:checked').id;
    let src
    if(sound == "radio-air-horn")
        src = "./assets/media/audio/air-horn.mp3"
    else if(sound == "radio-car-horn")
        src = "./assets/media/audio/car-horn.mp3"
    else if(sound == "radio-party-horn")
        src = "./assets/media/audio/party-horn.mp3" 
    audio.src = src
    audio.volume = vol_number.value/100
    audio.play()
})

// Update the icon based on the volume number
function updateVolImage(){
    let src
    honk_btn.disabled = false
    if(vol_number.value >= 67)
        src = "./assets/media/icons/volume-level-3.svg"
    else if(vol_number.value >= 34)
        src = "./assets/media/icons/volume-level-2.svg"
    else if(vol_number.value >= 1)
        src = "./assets/media/icons/volume-level-1.svg"
    else {
        src = "./assets/media/icons/volume-level-0.svg"
        honk_btn.disabled = true
    }
    vol_image.src = src
}


