window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        //this.classList.toggle('on');
        document.querySelector('.TopBanner').classList.add('on');
        document.querySelector('.MainVisual').classList.add('on');
    });

    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });

    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    });


    // scroll event
    // const SEC = document.querySelectorAll('.action');
    // const WT=window.innerHeight;

    // window.addEventListener('scroll', () => {
    //     let sct = window.scrollY;
    //     SEC.forEach(e => {
    //         let secTop = e.offsetTop;
    //         let secH = e.clientHeight;
    //         if (sct > secTop - (WT - secH) / 2 - 200) {
    //             e.classList.add('on');
    //         };
    //         // sct > secTop - (WT-secH) / 2 - 200 ? e.classList.add('on') : e.classList.remove('on');
    //     });
    // });




    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');

    });

    const slideDots = document.querySelectorAll('.slide_dots li');

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2
                slideDots.forEach(it => it.classList.remove('on'))
                slideDots[count].classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    document.querySelector('.slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });






});


