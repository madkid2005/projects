const select1 = document.querySelector("#btnsearchhd");
const show1 = document.querySelector("#btnsearch");

function hide1() {
    select1.classList.toggle("hiden");
}
select1.addEventListener("click", hide1)

function unhide1() {
    show1.classList.toggle("hiden");
}
select1.addEventListener("click", unhide1)

const select2 = document.querySelector("#kia");
const show2 = document.querySelector("#kiahd");

function kia() {
    show2.classList.toggle("hiden");

}
select2.addEventListener("mouseover", kia)

const click1 = document.getElementById("click1");
const showclick1 = document.getElementById("showclick1");

function showclicks1() {
    showclick1.classList.remove("hiden");
    showclick2.classList.add("hiden");
    showclick3.classList.add("hiden");
}
click1.addEventListener('click', showclicks1)


const click2 = document.getElementById("click2");
const showclick2 = document.getElementById("showclick2");

function showclicks2() {
    showclick2.classList.remove("hiden");
    showclick3.classList.add("hiden");
    showclick1.classList.add("hiden");


}
click2.addEventListener('click', showclicks2)



const click3 = document.getElementById("click3");
const showclick3 = document.getElementById("showclick3");

function showclicks3() {
    showclick3.classList.remove("hiden");
    showclick1.classList.add("hiden");
    showclick2.classList.add("hiden");
}
click3.addEventListener('click', showclicks3)