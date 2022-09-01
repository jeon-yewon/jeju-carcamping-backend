function textDisplay(element) {
    const textArray = element.innerText.split('')
    const special = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ'];
    const exception = [' ', '\n', '.', ',', ':', ')'];

    const randomIntBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const numArray = [];
    textArray.forEach(_ => {
        const num = randomIntBetween(5, 40);
        numArray.push(num);
    })

    let newText;
    let completeCount;
    const timer = setInterval(() => {
        completeCount = 0;
        newText = '';
        numArray.forEach((num, i) => {
            if (exception.includes(textArray[i]) || numArray[i] === 0) {
                newText += textArray[i]
                completeCount += 1;
            } else {
                newText += special[numArray[i] % special.length];
                numArray[i] = --num;
            }
        })
        
        element.innerText = newText;
        if(completeCount === numArray.length) clearInterval(timer)
    }, 100)
}

const text = document.querySelector('.random_text');
textDisplay(text);