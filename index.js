


// const liens = document.getElementsByClassName('list-group-item');

// Array.from(liens).forEach(element => {
//     element.addEventListener("click", function(){
//         Array.from(liens).forEach(el => {
//             el.classList.remove("active")
//         });
//         element.classList.add("active");
//     });
// });

    let Work = document.getElementById("click1");

    work.addEventListener('click', function(event){
    console.log("click");

    let destination = document.getElementById("Work");

    destination.scrollIntoView({behavior: "smooth"});
})
    let Shop = document.getElementById("click2");

work.addEventListener('click', function(event){
    console.log("click");

    let destination = document.getElementById("Shop");

    destination.scrollIntoView({behavior: "smooth"});

})

    let Contact = document.getElementById("click3");

    work.addEventListener('click', function (event){
        console.log("click");
    
    let destination = document.getElementById("Contact");
    
        destination.scrollIntoView({behavior: "smooth"});

})