/*

sources:
-->> https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
-->> https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
-->> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

function getRandomInteger(min, max) {
    // min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function blurBabyBlur(element) {
    // translate3d args
    let randTranslateX = getRandomInteger(-300, 300);
    let randTranslateY = getRandomInteger(-300, 300);
    let randTranslateZ = getRandomInteger(-300, 300);
    // rotate3d args
    let randRotateX = getRandomInteger(-1, 2);
    let randRotateY = getRandomInteger(-1, 2);
    let randRotateZ = getRandomInteger(-1, 2);
    let randRotateAngle = getRandomInteger(-720, 720);

    let randScale = getRandomInteger(2, 5);
    let duration = 5000;

    const transformVal = `translate3d(${randTranslateX}px, ${randTranslateY}px, ${randTranslateZ}px) rotate3d(${randRotateX}, ${randRotateY}, ${randRotateZ}, ${randRotateAngle}deg) scale(${randScale})`;

    // store each keyframe of animation as an object in an array
    const smoke = [
        // 0%
        {
            opacity: 0,
            filter: "blur(0)",
            transform: "translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg) scale(1)"
        },
        // 50%
        {
            opacity: 1
        },
        // 100%
        {
            opacity: 0,
            filter: "blur(50px)",
            transform: transformVal
        }
    ];

    element.animate(smoke, duration);
}

export default blurBabyBlur;