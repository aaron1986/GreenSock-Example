/* gsap.to('h1', {
    duration:1, opacity:0
}); */


let timeline = gsap.timeline();

timeline.to('h1', {
    duration:1, opacity:0
});

timeline.from('#heading-text', {
    duration:3, opacity:0
});

timeline.from('p', {
    duration:1, scale:0, ease:"rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })"
});


timeline.from('span', {
    duration:3, opacity:0, stagger:1
});