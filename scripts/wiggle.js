const contentBlobs = document.querySelectorAll(".content-blob");
const headerEl = document.querySelector(".heading-container");

// remember original border radius for each blob
// border radius of last keyframe should be same as original border radius (pre-animation)
// so that blob transitions smoothly back to its original shape when animation is over
const finalBorderRadii = [
    "13% 87% 34% 66% / 54% 49% 51% 46%",
    "50% 50% 27% 73% / 46% 53% 47% 54%",
    "61% 39% 70% 30% / 46% 60% 40% 60%"
];

const keyframes = [
    // 0%
    {
        borderRadius: "51% 49% 82% 18% / 31% 59% 41% 69%",
        transform: "scale(1)",
        backgroundColor: "#fff"
    },
    // 20%
    {
        borderRadius: "63% 37% 82% 18% / 31% 45% 55% 69%",
        transform: "scale(0.9)"
    },
    // 40%
    {
        borderRadius: "63% 37% 67% 33% / 45% 45% 55% 55%",
        transform: "scale(1)",
        backgroundColor: "yellow"
    },
    // 60%
    {
        borderRadius: "76% 24% 67% 33% / 45% 57% 43% 55%",
        transform: "scale(0.9)",
        backgroundColor: "#fff"
    },
    // 80%
    {
        borderRadius: "76% 24% 46% 54% / 63% 57% 43% 37%",
    },
    // 100% - final frame based on blob type
    {}
];

// source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// identify the blob that is currently in viewport
// there should only be one, since each blob element's parent element occupies 100% of the viewport height
function getBlobInViewport(blobNodeList) {
    const blobInViewport = [...blobNodeList].filter(blob => isInViewport(blob));
    return blobInViewport[0];
}

// blob number corresponds to index # used to access blob element's final keyframe's border radius value
// stored in finalBorderRadii array
function getBlobNum(blob) {
    if (blob.classList.contains("blob1")) {
        return 0;
    } else if (blob.classList.contains("blob2")) {
        return 1;
    } else if (blob.classList.contains("blob3")) {
        return 2;
    }
}

function wiggleIt(blobNodeList) {
    let blob = getBlobInViewport(blobNodeList);
    // if no blob is returned, exit
    if (!blob) return;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    let distanceAwayFromTop = Math.floor(blob.getBoundingClientRect().top);
    let headerHeight = Math.floor(headerEl.getBoundingClientRect().height);

    // identify which of the three blob types current blob is
    let blobNum = getBlobNum(blob);

    // animate blob when distance of top edge of blob bounding box to top of viewport is less than header height
    if (distanceAwayFromTop === headerHeight - 20) {
        // assign/update value of last item in keyframes array before passing array in to animate method
        keyframes[keyframes.length - 1] = {
            borderRadius: finalBorderRadii[blobNum],
            transform: "scale(1)"
        };
        blob.animate(keyframes, 3000);
    }
}

document.addEventListener("scroll", () => wiggleIt(contentBlobs));