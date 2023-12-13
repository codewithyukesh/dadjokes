const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

//fetch method
// const generateJoke = () => {

//     const setHeader = {
//         headers : {
//             Accept: "application/json"
//         }
//     }


//     fetch('https://icanhazdadjoke.com/', setHeader).
//     then((res)=> res.json())
//     .then( (data)=> {
//         joke.innerHTML = data.joke
//     } ).catch((error)=>{console.log(error);})
// }


// async await method
const generateJoke = async () => {

    try {
        const setHeader = {
            headers : {
                Accept: "application/json"
            }
        }
    
    
        const res = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data =  await res.json();
        joke.innerHTML = data.joke
    } catch (error) {
        console.log(`the error is ${error}`);
    }
}
jokeBtn.addEventListener('click', generateJoke);
generateJoke();