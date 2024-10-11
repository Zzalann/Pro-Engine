
const timeline1 = gsap.timeline();
timeline1
    .fromTo('.js-kep', .8, {opacity: 0, y:'-200%'}, {opacity:1, y:0})
    .fromTo('.js-leiras', .8, {opacity: 0, x:'-200%'}, {opacity:1, x:0})
    .fromTo('.js-introszoveg', .8, {opacity: 0, x:'-200%'}, {opacity:1, x:0})
    .fromTo('.js-introkep', .8, {opacity: 0, y:200}, {opacity:1, y:0})

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".js-gepsz1", 
    { x: -2000 }, 
    { 
      delay: .5,
      x: 0, 
      duration: 2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-first", 
        toggleActions: "play none none none", 
      }
    }
  );
  gsap.fromTo(".js-gepk1", 
    { x: -2000 }, 
    { 
      delay: .8,
      x: 0, 
      duration: 2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-first", 
        toggleActions: "play none none none", 
      }
    }
  );

  gsap.fromTo(".js-gepsz2", 
    { x: 2000 }, 
    { 
      delay: .9,
      x: 0, 
      duration: 2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-first", 
        toggleActions: "play none none none", 
      }
    }
  );
  gsap.fromTo(".js-gepk2", 
    { x: 2000 }, 
    { 
      delay: 1.1,
      x: 0, 
      duration: 2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-first", 
        toggleActions: "play none none none", 
      }
    }
  );

  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-trigger1",
      toggleActions: "play none none none"
    }
  });
  
  timeline2
    .fromTo(".js-nulla", 
      { y: 2000 }, 
      { 
        y: 0, 
        duration: 2, 
        ease: "power2.out" 
      }
    )
    .fromTo('.js-egy', 
      {opacity: 0, y: 100}, 
      {opacity: 1, y: 0, duration: 0.5}
    )
    .fromTo('.js-ketto', 
      {opacity: 0, y: 100}, 
      {opacity: 1, y: 0, duration: 0.5}
    )
    .fromTo('.js-harom', 
      {opacity: 0, y: 100}, 
      {opacity: 1, y: 0, duration: 0.5}
    )
    .fromTo('.js-negy', 
      {opacity: 0, y: 100}, 
      {opacity: 1, y: 0, duration: 0.5}
    );
  
    