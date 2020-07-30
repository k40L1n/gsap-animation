// gsap.from('.header', {duration:1, y: '-100%', ease: 'bounce'})
// gsap.from('.link', {duration:1, opacity:0,delay:1, stagger:.5})
// gsap.from('.right', {duration:2, x: '-100vw', delay:1, ease: 'expo.out'})
// gsap.from('.left', {duration:1, delay:1, x: '-100%'})
// gsap.to('.footer', {duration:1, y:0, ease: 'elastic', delay: 2.5})
// gsap.fromTo('.button', {opacity:0, scale:0, rotation: 720}, {opacity: 1, scale: 1, delay:3.5, duration:1, rotation:0 })


const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
});
timeline
    .from('.header', {
        y: '-100%',
        ease: 'bounce'
    })
    .from('.link', {
        opacity: 0,
        stagger: .5
    })
    .from('.right',{
        x: '100vh',
        ease: 'expo.out'
    })
    .from('.left', {
        x: '-100%'
    },
        '<.5'
    )
    .to('.footer', {
        y:0,
        ease: 'elastic'
    })
    .fromTo('.button', {opacity:0, scale:0, rotation: 720}, {opacity: 1, scale: 1, rotation:0 })

    // button event listener
    
    const btn = document.querySelector('.button');
    btn.addEventListener('click', ()=> {
        timeline.timeScale(3);
        timeline.reverse();     
    })