const color_list = [
    '#5D4E60',
    '#826C7F',
    '#A88FAC',
    '#D4B2D8'
];

//ASSIGN BUTTON TO VARIABLE BUTTON
let button = document.getElementById('btn');

//ASSIGN VARIABLE BUTTON TO LISTEN TO CLICK EVENTS
button.addEventListener("click", function() {
    // VARIABLE RANDOM CHOOSES FROM COLOR_LIST ARRAY RANDOMLY
    let random = Math.floor((Math.random() * color_list.length));

    let random_element = color_list[random]
    
    //USES JAVASCRIPT TO MANIPULATE CSS TO THE RANDOM COLOR LIST
    document.body.style.backgroundColor = random_element;
}) 



