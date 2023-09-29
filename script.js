const api_url ="https://api.quotable.io/random";
const authore = document.getElementById("authore")
const quote = document.getElementById("quote")

async function getquote(url){
    const response =await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    authore.innerHTML = data.author
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet Window", "width=600, height=300");
    // console.log("click")
}