//ANIMATION to happen
const container = document.querySelector(".container");
const card = document.querySelector(".card");

//items
const img = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const sizes = document.querySelector(" .sizes");
const purchase = document.querySelector(" .purchase button")
const descrpition = document.querySelector(" .info h3")

//Animate begin

container.addEventListener("mousemove", (e) => {
    console.log(e.pageX);
    let xaxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yaxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;

});
//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = " none";
    //pop out
    /////// z unusual behavour
    title.style.transform = "translateZ(150px)"
    img.style.transform = "translateZ(175px) rotateZ(-45deg)"
    descrpition.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(50px)";
});
//Animate out 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = " all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    descrpition.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    urchase.style.transform = "translateZ(0px)";
});