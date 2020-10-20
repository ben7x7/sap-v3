const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 1 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.5 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.3 });
tl.fromTo(".home", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=0.3");
