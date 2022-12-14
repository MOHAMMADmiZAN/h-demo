// preloader
window.onload = function () {

    setTimeout(() => {
        if (document.getElementById('preloader')) {
            document.getElementById('preloader').style.display = 'none';
        }
    }, 500)


// /// variables////
    const win = $(window);
    const html_body = $('html, body');


// // animation scroll js
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 10);
                return false;
            }

        }
    });

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
            strings: ['Minimum Time', 'Minimum Effort', 'No app', 'No coding'],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true,
            loopCount: Infinity,
            startDelay: 100,

        });
        //Minimum Time
        // Minimum Effort
        // No app
        // No coding
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


    const priceMonth = document.querySelector('.price_month');
    const priceYear = document.querySelector('.price_annual');
    const free_plan = document.querySelector('.free_plan');
    const individual_plan = document.querySelector('.individual_plan');
    const startup_plan = document.querySelector('.startup_plan');
    const sme_plan = document.querySelector('.sme_plan');
    const enterprise_plan = document.querySelector('.enterprise_plan');
    const business_plan = document.querySelector('.business_plan');


    const priceYearFunc = () => {
        priceMonth.style.backgroundColor = 'transparent';
        priceMonth.style.color = '#06C4FF';
        priceYear.style.backgroundColor = '#06C4FF';
        priceYear.style.color = '#fff';
        // free_plan.innerHTML =
        //     `
        //       <div class="plan_ar"><span class="font_35">3</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
        //
        //     `
        individual_plan.innerHTML =
            `
               <div class="plan_price"><span class="font_51">29</span>$/mo</div>
              <div class="plan_ar"><span class="font_35">50</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
             
            `
        startup_plan.innerHTML =
            `
            <div class="plan_price"><span class="font_51">99</span>$/mo</div>

             <div class="plan_ar"><span class="font_35">200</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
            `
        sme_plan.innerHTML =
            `
             <div class="plan_price"><span class="font_51">169</span>$/mo</div>

             <div class="plan_ar"><span class="font_35">500</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
            `
        business_plan.innerHTML =
            `
             <div class="plan_price"><span class="font_51">299</span>$/mo</div>
             <div class="plan_ar"><span class="font_35">1500</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
             
            `
        // enterprise_plan.innerHTML =
        //     `
        //     <div class="plan_price">Custom</div>
        //     `

    }

    const priceMonthFunc = () => {
        priceYear.style.backgroundColor = 'transparent';
        priceYear.style.color = '#06C4FF';
        priceMonth.style.backgroundColor = '#06C4FF';
        priceMonth.style.color = '#fff';
        // free_plan.innerHTML =
        //     `
        //     <div class="plan_ar"><span class="font_35">0</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
        //
        //    `
        individual_plan.innerHTML =
            `
             <div class="plan_price"><span class="font_51">36</span>$/mo</div>
             <div class="plan_ar"><span class="font_35">25</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
             
           `
        startup_plan.innerHTML =
            `
             <div class="plan_price"><span class="font_51">124</span>$/mo</div>
             <div class="plan_ar"><span class="font_35">100</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
              
            `
        sme_plan.innerHTML =
            `  <div class="plan_price"><span class="font_51">211</span>$/mo</div>
              <div class="plan_ar"><span class="font_35">250</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
              
            `
        business_plan.innerHTML =
            `
              <div class="plan_price"><span class="font_51">375</span>$/mo</div>
              <div class="plan_ar"><span class="font_35">500</span><img src="/img/ar-ico.png" alt="/img/ar-ico.png"></div>
              
            `
        // enterprise_plan.innerHTML =
        //     `
        //    <div class="plan_price">Custom</div>
        //     `
    }


    priceYearFunc();

    priceMonth.addEventListener('click', priceMonthFunc)
    priceYear.addEventListener('click', priceYearFunc)

    document.querySelectorAll('.price_box_custom').forEach((item) => {
        item.addEventListener('mouseover', () => {
            for (let child of item.children) {
                for (let child1 of child.children) {
                    if (child1.classList.contains('plan_ar')) {
                        child1.children[1].setAttribute('src', '/img/ar-ico-purple.png')
                    }
                }
            }

        })
        item.addEventListener('mouseout', () => {
            for (let child of item.children) {
                for (let child1 of child.children) {
                    if (child1.classList.contains('plan_ar')) {
                        child1.children[1].setAttribute('src', '/img/ar-ico.png')
                    }
                }
            }

        })

    })

// iframe element
//     (() => {
//         let iframe = document.querySelectorAll('.a-product');
//         for (const iframeElement of iframe) {
//             console.log(iframeElement)
//
//
//         }
//     })()
//
//     let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//     console.log('Page load time is ' + loadTime);

}


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



