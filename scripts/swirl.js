const background = document.querySelector('.swirl');
// show swirl animation when page loads
window.onload = () => {
    background.style.opacity = 0;
    background.style.transform = 'scale(8) rotate(180deg)';
}