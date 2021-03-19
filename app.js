let cName = document.querySelector('.cn');
let subButton = document.querySelector('.sub');
let pop = document.querySelector('.res-pop');
let rank = document.querySelector('.ranking-pop');
let share = document.querySelector('.worldShare');



subButton.addEventListener('click', () => {

    let country = cName.value;

let fCountry = capital(country);
function capital(input) {  
    var words = input.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    return CapitalizedWords.join(' ');  
} 
console.log(fCountry);
   
    fetch(`https://world-population.p.rapidapi.com/population?country_name=${fCountry}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a1c59c46bdmshda8f76ca21bb37cp19e40ajsn8a03a6fec378",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(data => {
            let x=data.body.population;
            let num=thousands_separators(x);
            pop.innerHTML="Population : "+num;
            rank.innerHTML="World Rank : "+data.body.ranking;
            share.innerHTML="Global Share : "+data.body.world_share.toFixed(2)+"%";
        });

})
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
