const links = document.querySelectorAll(".link-list-item a");
const blobs = document.querySelectorAll(".content-blob");
const header = document.querySelector(".heading-container");
const zigzags = document.querySelectorAll(".pattern-bg.zig-zag");
const polkadots = document.querySelectorAll(".pattern-bg.polka-dots");
const stripes = document.querySelectorAll(".pattern-bg.stripes");
const footer = document.querySelector('footer');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        blobs.forEach(blob => {
            blob.classList.add('yellow');
        });
        header.classList.add('yellow');
        footer.classList.add('yellow');
        zigzags.forEach(zag => {
            zag.classList.add('yellow');
        });
        polkadots.forEach(dot => {
            dot.classList.add('yellow');
        });
        stripes.forEach(stripe => {
            stripe.classList.add('yellow');
        });
    });
    link.addEventListener('mouseleave', () => {
        blobs.forEach(blob => {
            blob.classList.remove('yellow');
        });
        header.classList.remove('yellow');
        footer.classList.remove('yellow');
        zigzags.forEach(zag => {
            zag.classList.remove('yellow');
        });
        polkadots.forEach(dot => {
            dot.classList.remove('yellow');
        });
        stripes.forEach(stripe => {
            stripe.classList.remove('yellow');
        });
    });
});