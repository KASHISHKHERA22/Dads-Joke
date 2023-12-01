const jokeEl = document.querySelector('#joke');
const btn = document.querySelector('#jokeButton');
// const url = 'https://icanhazdadjoke.com/'

//  function generateJoke() {
// const jokeRes = await fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             ' Accept': 'application/json'
//         }
//     })

//     const jokes = await jokeRes.json();
//     console.log(jokes)
// }
btn.addEventListener('click', generateJoke);
generateJoke();
function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
            // console.log(data)
        });
}