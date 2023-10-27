// Helper functions
let qs = (selector, context = document) => context.querySelector(selector);
let qsa = (selector, context = document) =>
    Array.from(context.querySelectorAll(selector));

// Get gallery item into Lightbox
function openLightbox(e) {
    const gitem = e.currentTarget,
        itemimg = qs("img", gitem),
        itemtext = qs(".single-title", gitem);
    // Fill in the elements of lightbox.
    const lightbox = qs(".lightbox"),
        lightboximg = qs(".lb-img", lightbox),
        lightboxtitle = qs(".lb-title", lightbox);
    lightboximg.onload = () => {
    // fires as soon as image.src is assigned a URL.
    lightboxtitle.innerHTML = itemtext.innerHTML;
    lightbox.classList.add("open");
};
    // Assigns a relative url. This will fire onload.
    lightboximg.setAttribute("src", itemimg.getAttribute("src"));
}

function closeLightbox(e) {
    e.preventDefault();
    const lightbox = e.currentTarget.closest(".lightbox");
    lightbox.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = qs(".lightbox.preload");
    if (lightbox) lightbox.classList.remove("preload");

    const gitems = qsa(".single-gallery");
        gitems.forEach((el, i) => {
        el.addEventListener("click", openLightbox);
        // el.style.setProperty('--staggered-delay', (i + 3) * 150 + 'ms'); // 2020-09-21
    });

    const lbclose = qs(".lightbox .lb-close");
    if (lbclose) lbclose.addEventListener("click", closeLightbox);
});

//credit: https://github.com/jrrio/gallery-with-lightbox