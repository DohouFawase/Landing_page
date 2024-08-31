function starLodader () {
    let countCreatElemt = document.querySelector ('.count p')
    let courentValue = 0 

    function updateCounter () {
        if (courentValue < 100) {
        let increment = Math.floor(Math.random() * 10)+1
        courentValue = Math.min(courentValue + increment, 100)
        countCreatElemt.textContent =  courentValue

        let delay = Math.floor(Math.random() *200) +25
        setTimeout(updateCounter,delay)
        }
    }

    updateCounter()

}

starLodader()

gsap.to(".count", {opacity:0, delay:3.5, duration:0.5})
let textWrapper = document.querySelector(".ml116")
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

anime.timeline({loop:false})
.add({
    target: '.ml116 .letter',
    translateY:[-100,0],
    easing:"easeOutExpo",
    duration:1500,
    delay:(el,i)=> 30 * i
})

.add({
    target: '.ml116 .letter',
    translateY:[0,100],
    easing:"easeOutExpo",
    duration:3000,
    delay:(el,i)=> 2000 + 30 * i

})

gsap.to(".pre-loader", {
    scale:0.5,
    ease: "power4.inOut",
    duration:2,
    delay:3
})


gsap.to(".loader-bg", {
    height:0,
    ease: "power4.inOut",
    duration:1.5,
    delay:4
})


gsap.to(".loader-2", {
    clipPath: "polygon(0%,0%,100%,0%,100%,0%, 0%, 0%)",
    ease: "power4.inOut",

    duration:1.5,
    delay:3.5
})


gsap.from(".hearder h1", {
   y:200,
   ease: "power4.inOut",
   duration:1.5,
   delay:3.5,
   stragger:0.5
})

gsap.from(".img", {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    duration:1.5,
   delay:4.5,
   stragger:0.25

 })

