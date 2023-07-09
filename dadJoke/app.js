const ul = document.querySelector('#container');
const button = document.querySelector('#btn');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        const joke = res.data.joke;
        return joke;
    } catch(e) {
        return "WELL, THIS IS EMBARRASSING! NO JOKES TODAY. SORRY!!"
    }
}

const newJoke = async() => {
    try {
        const jokeText = await getDadJoke();
        console.dir(jokeText);
        ul.innerHTML = '';
        const newLi = document.createElement('li');
        console.dir(newLi);
        newLi.append('');
        newLi.append(jokeText);
        ul.append(newLi);
    } catch(e) {
        console.log("ERROR: ", e);
    }
}

button.addEventListener('click', newJoke);