import gsap from "gsap"

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()

    const tlText = gsap.timeline()

    tlText.to('.first-text', {
        x: -1100,
        scrollTrigger: {
            trigger: '.jumbotron-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
            immediateRender: false
        }
    })



    tl.to(position, {
        x: 1.5911352044,
        y: 1.3665061528,
        z: -1.6030574965,
        scrollTrigger: {
            trigger: '.sound-section',
            top: 'top top',
            end: 'bottom bottom',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: -0.2397929003,
        y: -0.0237648072,
        z: 0.0241209213,
        scrollTrigger: {
            trigger: '.sound-section',
            top: 'top bottom',
            end: 'bottom bottom',
            scrub: 2,
            immediateRender: false
        }
    })
    .to(position, {
        x: -1.4230794075,
        y: 2.1980787816,
        z: -1.0424159292,
        scrollTrigger: {
            trigger: '.display-section',
            top: 'top bottom',
            end: 'bottom bottom',
            scrub: 2,
            immediateRender: false
        }
    })
    .to(target, {
        x: -0.2397929003,
        y: -0.0237648072,
        z: 0.0241209213,
        scrollTrigger: {
            trigger: '.display-section',
            top: 'top bottom',
            end: 'bottom bottom',
            scrub: 2,
            immediateRender: false
        }
    })

}