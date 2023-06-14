function updateContent(e) {
    const blob = document.querySelector(`.content-blob[data-key="${e.key}"]`)
    const key = document.querySelector(`.content-div[data-key="${e.key}"]`);
    const src = `/assets/alphabet/${e.key}.svg`;

    // remove current content
    key.style.display = 'none';

    // generate new content
    // content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');

    // asl img
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '15rem';
    img.style.height = '15rem';
    img.dataset['toggle'] = 'tooltip';
    img.title = `${e.key}`;
    new bootstrap.Tooltip(img);

    // text div
    const textDiv = document.createElement('div');
    textDiv.id = 'text-div';
    const text1 = document.createElement('p');
    text1.textContent = 'reps: 10';
    const text2 = document.createElement('p');
    text2.textContent = 'sets: 5';

    // add all elements to DOM
    textDiv.append(text1, text2)
    contentDiv.append(img, textDiv);
    blob.appendChild(contentDiv);
}

// listen for keydown events
window.addEventListener('keydown', updateContent);




