let tl = gsap.timeline({ default: { duration: 0.75, ease: "power3.out" } });

//Entry animation
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.75)", duration: 1 }
);
tl.fromTo(".title", { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.5");
tl.fromTo("#jar", { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, "<");
tl.fromTo(".subtitle", { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "<");
tl.fromTo("button", { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "<");

//Cookie entry
tl.fromTo("#cookie", { opacity: 0, y: -20 }, { opacity: 1, y: 0 });

//Disapear popup by clicking
document.querySelector("button").addEventListener("click", () => {
  tl.fromTo("#cookie", { y: 0 }, { y: -20, yoyo: true });
  gsap.to("#jar", { duration: 1, morphSVG: "#cookie" });
  tl.to(".cookie-container", {
    scale: 1.25,
    duration: 0.75,
    ease: "power3.out",
    opacity: 0,
  });
});
