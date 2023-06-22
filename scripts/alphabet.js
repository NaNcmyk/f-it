function updateContent(e) {
    // use regex to check if user pressed a valid key (an alphabet, case insensitive)
    // event codes for alphabetic keys are the same regardless of case
    // if invalid key, exit
    if (!e.code.match(/Key[A-Z]/)) {
        console.log(`invalid key: ${e.code}`);
        return;
    }

    // // uncomment to see which key triggered the keydown event in console
    // console.log(`valid key:\nevent code: ${e.code}\nevent key: ${e.key}`);

    // force event key to lowercase, to match case insensitively (in case caps lock is on)
    const lowerCaseEventKey = e.key.toLowerCase();
    // console.log(`event key (lowercase): ${lowerCaseEventKey}`);

    const blob = document.querySelector(`.content-blob[data-key="${lowerCaseEventKey}"]`);
    const initialContentDiv = document.querySelector(`.content-div[data-key="${lowerCaseEventKey}"]`);
    const src = `/assets/alphabet/${lowerCaseEventKey}.svg`;

    // remove current content
    initialContentDiv.style.display = 'none';

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
    img.title = `${lowerCaseEventKey}`;
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