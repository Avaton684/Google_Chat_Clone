/* function openNav(){
    document.getElementById("sidemenuebar").style.width = "250px";
    document.getElementById("chat_section").style.marginLeft = "250px";
}
function closeNav(){
    document.getElementById("sidemenuebar").style.width = "0";
    document.getElementById("chat_section").style.marginLeft = "0";
} */

/* side navigation toggle */
function togglenav() {
    const nav = document.getElementById("sidemenuebar")
    const chat = document.getElementById("chat_section")
    const homechat = document.getElementById("home_chat_section")
    nav.classList.toggle("open");
    chat.classList.toggle("shift");     
    homechat.classList.toggle("shift");
    // if (homechat.classList.contains("shift")) {
    //     // when nav opens
    //     homechat.style.marginLeft = "100px";
    //     homechat.style.width = "90%";
    //     chat.style.width = "60%";
        
    // } else {
    //     // when nav closes
    //     homechat.style.marginLeft = "";
    //     homechat.style.width = "";
    //     chat.style.width = "";
    // }
}

/* Home chat split pan toggle */
const homechatsection = document.getElementById('home_chat_section')
const chatsection = document.getElementById('chat_section')
const splitscreen = document.getElementById('splitscreen-arrow');
const splitbtn = document.getElementById('split-btn')
//div box added
const box = document.createElement('div')
box.classList.add('splitbox')
box.style.display = 'none'
box.style.height = '65px'
box.style.width = '170px'
box.style.borderRadius = '15px'
box.style.backgroundColor = '#e9eef6'
box.style.position = 'absolute'
box.style.top = '100px'
box.style.left = '260px' 
box.innerHTML = `<div class="pan pan1" id="pan1" style="padding: 5px; padding-left: 40px; display:flex; align-items: center;">split pan</div>
    <div class="pan pan2" id="pan2" style="padding: 5px; padding-left: 40px; display:flex; align-items: center;">single pan</div>`
// div box added inside home chat section 
homechatsection.appendChild(box)
let istoggled = false;
// Event Listener to show and hide splitscreen control box
splitscreen.addEventListener('click', function () {
    istoggled = !istoggled;
    if (istoggled === false) {
        splitscreen.style.transform = 'rotate(0deg)';
        box.style.display = 'none'
    }
    else {
        splitscreen.style.transform = 'rotate(180deg)';
        box.style.display = 'block'
    }
})
// disible or enable check condition on splitscreen control box 
const pan1 = document.getElementById('pan1')
const pan2 = document.getElementById('pan2')
// let currentfunction = pan1function;
function resetPan() {
    pan1.style.backgroundColor = ""
    pan1.style.borderTopLeftRadius = ''
    pan1.style.borderTopRightRadius = ''
    pan1.innerHTML = `split pan <span class="material-symbols-outlined" style="font-size: x-large; position: relative; left: 20px; color: transparent;">
                                check
                            </span>`

    pan2.style.backgroundColor = ""
    pan2.style.borderBottomLeftRadius = ''
    pan2.style.borderBottomRightRadius = ''
    pan2.innerHTML = `single pan <span class="material-symbols-outlined" style="font-size: x-large; position: relative; left: 10px; color: transparent;">
                                check
                            </span>`
}
function pan1function() {
    resetPan();
    pan1.style.backgroundColor = "#d8e4f8ff"
    pan1.style.borderTopLeftRadius = '15px'
    pan1.style.borderTopRightRadius = '15px'
    pan1.innerHTML = `split pan <span class="material-symbols-outlined" style="font-size: x-large; position: relative; left: 20px; color: rgb(25, 246, 25);">
                                check
                            </span>`
    homechatsection.style.width = '30vw'
    chatsection.style.width = '60vw'          
    // homechatsection.classList.add('shift')
    // chatsection.classList.add('shift')

}
function pan2function() {
    resetPan();
    pan2.style.backgroundColor = "#d8e4f8ff"
    pan2.style.borderBottomLeftRadius = '15px'
    pan2.style.borderBottomRightRadius = '15px'
    pan2.innerHTML = `single pan <span class="material-symbols-outlined" style="font-size: x-large; position: relative; left: 10px; color: rgb(25, 246, 25);">
                                check
                            </span>`
    homechatsection.style.width = '92vw'
    chatsection.style.width = '0vw'
    // homechatsection.classList.add('shift')
    // chatsection.classList.add('shift')
}
pan1function();

pan1.addEventListener('click', pan1function)
pan2.addEventListener('click', pan2function)

/* Dark Mode and Light Mode toggle */

const body = document.getElementById('body')
const header = document.querySelector('header')
const sidemenuebar = document.getElementById("sidemenuebar")
// const navbar = document.getElementById ('nav')
const navs = document.querySelectorAll('.nav1, .nav2, .nav3, .nav4')
const main = document.querySelector('main')
const divs = document.querySelectorAll('div')
const spans = document.querySelectorAll('span')
const inputs = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const selects = document.querySelectorAll('select')
const nightlightmodetoggle = document.getElementById('nightlightmodetoggle');
const modebtn = document.getElementById('mode-btn');
const lightmode = document.getElementById('lightmode');
const darkmode = document.getElementById('darkmode');
lightmode.style.display = 'none'
modebtn.addEventListener('click', function () {
    istoggled = !istoggled
    if (istoggled === false) {
        lightmode.style.display = 'none'
        darkmode.style.display = ''
        main.style.backgroundColor = ''
        const headercontainer = document.querySelector('header');
        const AllElementsInheader = headercontainer.querySelectorAll('*')
        AllElementsInheader.forEach(element => {
            element.style.backgroundColor = ''
            element.style.color = ''
        })
        const nav2container = document.querySelector('.nav2')
        const AllElementsInNav2 = nav2container.querySelectorAll('*')
        AllElementsInNav2.forEach(element => {
            element.style.backgroundColor = ''
            element.style.color = ''
        })
        const nav3container = document.querySelector('.nav3cover')
        const AllElementsInNav3 = nav3container.querySelectorAll('*')
        AllElementsInNav3.forEach(element => {
            element.style.backgroundColor = ''
            element.style.color = ''
        })
        const newchatbtncontainer = document.querySelector('.new-chat-btn')
        const AllElementsInnewchatbtn = newchatbtncontainer.querySelectorAll('*')
        AllElementsInnewchatbtn.forEach(element => {
            element.style.backgroundColor = ''
            element.style.color = ''
        })
        const homechatseccovercontainer = document.querySelector('.homechatseccover')
        const AllElementsInhomechatseccover = homechatseccovercontainer.querySelectorAll('*')
        AllElementsInhomechatseccover.forEach(element => {
            element.style.backgroundColor = ''
            element.style.color = ''
        })
        chatsection.style.backgroundColor = ''
        document.querySelector('.dropdown-arrow-1 svg').style.fill = ''
        document.querySelector('.dropdown-arrow-2 svg').style.fill = ''
        document.querySelector('.dropdown-arrow-3 svg').style.fill = ''
        document.querySelector('.dropdown-arrow-4 svg').style.fill = ''

    }
    else {
        lightmode.style.display = 'block'
        darkmode.style.display = 'none'
        main.style.backgroundColor = '#20242cff'
        const headercontainer = document.querySelector('header');
        const AllElementsInheader = headercontainer.querySelectorAll('*')
        AllElementsInheader.forEach(element => {
            element.style.backgroundColor = '#20242cff'
            element.style.color = 'white'
        })
        const nav2container = document.querySelector('.nav2')
        const AllElementsInNav2 = nav2container.querySelectorAll('*')
        AllElementsInNav2.forEach(element => {
            element.style.backgroundColor = '#2d3544ff'
            element.style.color = 'white'
        })
        const nav3container = document.querySelector('.nav3cover')
        const AllElementsInNav3 = nav3container.querySelectorAll('*')
        AllElementsInNav3.forEach(element => {
            element.style.backgroundColor = '#2d3544ff'
            element.style.color = 'white'
        })
        document.querySelector('.circle').style.backgroundColor = 'green'
        const newchatbtncontainer = document.querySelector('.new-chat-btn')
        const AllElementsInnewchatbtn = newchatbtncontainer.querySelectorAll('*')
        AllElementsInnewchatbtn.forEach(element => {
            element.style.backgroundColor = '#121212'
            element.style.color = 'white'
        })
        document.querySelector('.dropdown-arrow-1 svg').style.fill = 'white'
        document.querySelector('.dropdown-arrow-2 svg').style.fill = 'white'
        document.querySelector('.dropdown-arrow-3 svg').style.fill = 'white'
        document.querySelector('.dropdown-arrow-4 svg').style.fill = 'white'
        const homechatseccovercontainer = document.querySelector('.homechatseccover')
        const AllElementsInhomechatseccover = homechatseccovercontainer.querySelectorAll('*')
        AllElementsInhomechatseccover.forEach(element => {
            element.style.backgroundColor = '#121212'
            element.style.color = 'white'
        })

        document.querySelector('.slider').style.backgroundColor = '#2d3544ff'
        document.querySelector('.thread-btn-cover').style.backgroundColor = '#2d3544ff'
        document.querySelector('.thread-btn-span1').style.backgroundColor = '#2d3544ff'
        document.querySelector('.thread-btn-span2').style.backgroundColor = '#2d3544ff'
        document.querySelector('#split-btn-cover').style.backgroundColor = '#2d3544ff'
        document.querySelector('.split-btn-span1').style.backgroundColor = '#2d3544ff'
        document.querySelector('.split-btn-span2').style.backgroundColor = '#2d3544ff'
        chatsection.style.backgroundColor = '#121212'
    }
})

