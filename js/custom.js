// // slick slider blog page
// $('#recent-blog .items').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoPlay: true,
//     arrows: true,
//     centerPadding: '60px',
//     prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
//     nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });


// /// variables////
// const win = $(window);
const html_body = $('html, body');
// const stk = $('.st-menu');
// const b2b = $('.back-top');
// const c_stk = 'stiky';
// const bdy = $('body');
//
//
// //stiky-header//
// win.scroll(() => win.scrollTop() > 300 ? stk.addClass(c_stk) : stk.removeClass(c_stk));
//
//
// // animation scroll js
// $('.text a').on('click', function () {
//     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//         let target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             html_body.animate({
//                 scrollTop: target.offset().top - 0
//             }, 1500);
//             return false;
//         }
//
//     }
// });


// accordion-start
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
// accordion-end


$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());
let navbarCollapse = document.querySelector('.navbar-toggler');
navbarCollapse.addEventListener('click', function (e) {

    document.getElementById('navbarSupportedContent').classList.toggle('show');
    document.querySelector('.show').style.bgColor = 'red';


})
let animatedText = document.querySelector('.animated-text');

if (animatedText) {
    const typed = new Typed('.animated-text', {
        strings: ['No App', 'No coding', 'Compatible with any browser'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        startDelay: 100,

    });
}


// legal page tab function

let tabItems = document.querySelectorAll('.legalTabItems .tab');
let tabContentItems = document.querySelectorAll('.legalTabContents .tab_content');
let legalIcon = document.querySelector('.legalIcon')
let legalItems = document.querySelector('.legalTabItems')

const tabFilter = (id) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let tabContentId = `${id}_content`
    for (const tabContentElement of tabContentItems) {
        if (tabContentElement.id !== tabContentId) {
            tabContentElement.classList.remove('tabActive');
            if (id !== tabContentElement.id.split('_')[0]) {
                document.getElementById(tabContentElement.id.split('_')[0]).classList.remove('tabItemActive')
            }

        } else {
            document.getElementById(id).classList.add('tabItemActive');
            tabContentElement.classList.add('tabActive');
        }
    }
}


// label icon click  function
const legalIconClick = () => {
    if (legalItems.style.display === 'block') {
        legalItems.style.display = 'none'
    } else {
        legalItems.style.display = 'block'
    }
}
const selectItem = (e) => {
    const {id} = e.target;
    if (window.innerWidth < 768) {
        legalIconClick()
    }
    tabFilter(id);
}

if (tabItems) {
    for (const tabItem of tabItems) {
        tabItem.addEventListener('click', selectItem);

    }
}
if (legalIcon) {
    legalIcon.addEventListener('click', legalIconClick)
}

// footer tab function
const addTab = (e) => {
    e.preventDefault()
    window.location.href = `legal.html?tab=${e.target.id}`


}
(function () {
    if (window.location.href.includes('tab')) {
        const id = window.location.href.split('=')[1];
        tabFilter(id);
    }

})()
const footerTabItems = ['li a#terms', 'li a#privacy'];

footerTabItems.forEach((item) => {
    document.querySelector(item) && document.querySelector(item).addEventListener('click', addTab);

})

// control scroll to top legal page

window.addEventListener('scroll', () => {

    let legalContent = document.querySelector('.legalTabContents')
    let scrollY = window.scrollY;
    if (legalContent) {
        if (scrollY > (legalContent.clientHeight - 320)) {

            if (window.innerWidth >= 768) {
                document.querySelector('.legalTabItems').style.cssText = `position: relative !important;`
            }


        } else {
            if (document.querySelector('.legalTabItems').style.display === 'block') {
                document.querySelector('.legalTabItems').style.cssText = `position: fixed !important; display: block !important;`
                return;
            }
            document.querySelector('.legalTabItems').style.cssText = `position: fixed !important;`


        }
    }


})
// legal toggler //
let legalPageSmallMenu = document.querySelector('#legal .navbar-toggler')
if (legalPageSmallMenu) {
    legalPageSmallMenu.addEventListener('click', () => {
        if (legalItems.style.display === 'block') {
            legalItems.style.display = 'none'
        }
    })

}

//Shrink nav on scroll - START CODE
/*==============================================================*/

/*==============================================================*/
//Shrink nav on scroll - END CODE
/*==============================================================*/
// solution section read more button
const readMoreBtn = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    let id = e.target.id;
    window.location.href = `about.html?#${id.split('_')[0]}`

}
window.addEventListener('load', () => {
    // iframe element
    let iframe = document.querySelectorAll('.a-product');
    for (const iframeElement of iframe) {
        console.log(iframeElement)

    }

})
window.onload = function () {
    // iframe element
    let iframe = document.querySelectorAll('.a-product');
    for (const iframeElement of iframe) {
        console.log(iframeElement.contentDocument)

    }

}

