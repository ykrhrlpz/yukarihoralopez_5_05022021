/* BAD TRAVERSY SHIT */
// var output = ""
// for (var i =0; i < people.length; i++)
// {
//     output += "<li>"+people[i].name+"</li>"
// }
// document.getElementById("people").innerHTML = output

/* GENIUS PONTA PRICELESS CODE */

// console.log(people.photographers.map( person =>  `<li>${person.name}</li>`).join(""))



// document.getElementById("people").innerHTML = people.photographers.map( person =>  `<li>${person.name}</li>`).join("")


// console.log(data.photographers.name);
// let mydata = JSON.parse(data); 
// alert(mydata[0])

// Replace ./data.json with your JSON feed
function readJson () 
{
    // http://localhost:8080
    fetch('/Reading/api/file')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.photographers = json;
        //console.log(this.users);
    })
    .catch(function () {
        this.dataError = true;
    })
 }
 
// document.getElementById("photographers").innerHTML = 
// `
//     <div class="photographer">
//         <img class="profile-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of Mimi Keel">
//         <h2>Mimi Keel</h2>
//         <h5>London, UK</h5>
//         <p class="description">Finding beauty in everyday things</p>
//         <p class="price-per-day">$400/day</p>
//         <div class="personal-tags">
//             <p class="categoryChip">#Portrait</p>
//             <p class="categoryChip">#Events</p>
//             <p class="categoryChip">#Travel</p>
//             <p class="categoryChip">#Animals</p>
//         </div
//     </div>
// `




const http = require("http")
const fs = require("fs")

// Creates the local server 
const server = http.createServer((req, res) => 
{
    try
    {
    // Wites server header
    res.writeHead(200, {"content-type" : "text/html"})

    // I think this allows this file to read from index.html
    fs.createReadStream("index.html").pipe(res)
    }

    catch (Err)
    {
        console.error(`Server error: ${Err}`)
    }
})

try
{
    // Listens on the port 3000
    server.listen(3000)
    // Displays the link to the localhost
    console.log("Now serving on http://localhost:3000")
}
catch (Err)
{

    console.error(`Something went wrong: ${Err}`)
}