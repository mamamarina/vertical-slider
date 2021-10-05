const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

upBtn.addEventListener('click', () => {changeSlide('up')});

downBtn.addEventListener('click', () => {changeSlide('down')});

document.addEventListener('keydown', 
event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
}) 

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`;
}


// redesign
const sidebarItems = document.querySelectorAll('.sidebar div');
const mainSlides = document.querySelectorAll('.main-slide div');


let mainSlidesItem = 0;

let sidebarItem = 0;


let sidebarBg = ['https://images.unsplash.com/photo-1508720187257-7bd189d23ded?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0dW1uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   'https://images.unsplash.com/photo-1507181179506-598491b53db4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   'https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwcmluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'];

let mainSlideBg = ['https://images.unsplash.com/photo-1577862236121-c237c73ef4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
                   'https://images.unsplash.com/photo-1616738935736-c0b9211e1f18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0dW1ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'];                           

let i=0;

sidebarItems.forEach((sidebarItem) => {
    sidebarItem.setAttribute('style', 'background-image: url(' + sidebarBg[i] + '); background-repeat: no-repeat; background-size: cover; opacity: 0.8');
    i++;
});

let n=0;

mainSlides.forEach((mainSlidesItem) => {
    mainSlidesItem.setAttribute('style', 'background-image: url(' + mainSlideBg[n] + '); background-repeat: no-repeat; background-size: cover');
    n++;
})

const title = [    
    'Autumn',
    'Winter',
    'Spring',
    'Summer',
    ];

const headings = document.getElementsByTagName('h1');
const paragraphs = document.getElementsByTagName('p');

j=0;

for (const heading of headings) {
    heading.innerHTML = (title[j]);
    j++;
};

for (const p of paragraphs) {
    p.innerHTML = '';
    j++;
}



