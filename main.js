/* BAD TRAVERSY SHIT */
// var output = ""
// for (var i =0; i < people.length; i++)
// {
//     output += "<li>"+people[i].name+"</li>"
// }
// document.getElementById("people").innerHTML = output

/* GENIUS PONTA PRICELESS CODE */

console.log(people.photographers.map( person =>  `<li>${person.name}</li>`).join(""))



document.getElementById("people").innerHTML = people.photographers.map( person =>  `<li>${person.name}</li>`).join("")
