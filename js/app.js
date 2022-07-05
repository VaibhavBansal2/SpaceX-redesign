(
    function () {
        let socialDivs = document.querySelectorAll('section.hero .social-links div')
        socialDivs.forEach((socialDiv, index) => {
            socialDiv.style.animation = `moveX 0.6s cubic-bezier(.51, .92, .24, 1.15) forwards ${index / 7 + .2}s`;
        });
        let main = document.querySelector('section.main')
        let main_c_spans = document.querySelectorAll('section.main .c span')
        let triggerStart = window.innerHeight / 5;

        let rocketOffsetTop = main.offsetTop;

        let thirdOffsetTop = main_c_spans[2].offsetTop;

        document.addEventListener('scroll', (e) => {
            if (window.scrollY > (rocketOffsetTop - triggerStart)) {
                main_c_spans[0].classList.add('active');
                main_c_spans[1].classList.add('active');
            } else {
                main_c_spans[0].classList.remove('active');
                main_c_spans[1].classList.remove('active');
            }

            if (window.scrollY > (thirdOffsetTop - triggerStart)) {
                main_c_spans[2].classList.add('active');
            } else {
                main_c_spans[2].classList.remove('active');
            }
        })

    }()
)