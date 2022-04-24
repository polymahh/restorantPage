import '../css/skeleton.css';
import '../css/normalize.css';
import createWebsite from './website';
import createHome from "./home"
import createMenu from "./menu";

createWebsite();
createHome();

const homeB = document.getElementById('home');
const menuB = document.getElementById('menu');
const mainP = document.getElementById('main');

homeB.addEventListener('click',()=>{
    mainP.innerHTML = "";
    createHome();
})

menuB.addEventListener('click',()=>{
    mainP.innerHTML = "";
    createMenu();
})

console.log(homeB);