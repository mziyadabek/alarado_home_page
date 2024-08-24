let check = false
var logo = document.getElementById("logoid")
var chThImg1 = document.getElementById("lmoon")
var chThImg2 = document.getElementById("sunid")

document.getElementById("theme").addEventListener("click", () => {
    if(!check){
        const root = document.documentElement;
        root.style.setProperty('--white', '#111729');
        root.style.setProperty('--h1c', '#fff')
        root.style.setProperty('--black', '#fff')
        root.style.setProperty('--gray', '#fff')
        logo.src = "alarado-icon-homepage-dark.svg"
        chThImg1.src = "Moon_fill.svg"
        chThImg2.src = "sun_dark.svg"
        chThImg2.classList.remove("theme2")
        chThImg1.classList.add("theme2")
        check = true
    }else{
        const root = document.documentElement;
        root.style.setProperty('--white', '#fff');
        root.style.setProperty('--h1c', '#223344')
        root.style.setProperty('--black', '#000')
        root.style.setProperty('--gray', '#909193')
        logo.src =" alarado-icon-homepage.svg"
        chThImg1.src = "Moon_fill_light.svg"
        chThImg2.src = "Sun_fill.svg"
        chThImg2.classList.add("theme2")
        chThImg1.classList.remove("theme2")
        check = false
    }

    
})