// Seleccionamos el formulario
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario
        alert('¡Reserva confirmada!'); // Pop-up de confirmación
        form.reset(); // Opcional: limpia el formulario después de confirmar
    });

    

// CARRUSEL

const images = document.querySelectorAll('.carousel-image')
const radius = 242
const progress = {
  value: 0
}
const carousel = document.querySelector('.carousel')

Observer.create({
  target: carousel,
  type: "wheel,pointer",
  onPress: (self) => {
    carousel.style.cursor = 'grabbing'
  },
  onRelease: (self) => {
    carousel.style.cursor = 'grab'
  },
  onChange: (self) => {
    gsap.killTweensOf(progress)
    const p = self.event.type === 'wheel' ? self.deltaY * -.0005 : self.deltaX * .05
    gsap.to(progress, {
      duration: 2,
      ease: 'power4.out',
      value: `+=${p}`
    })
  }
})

const animate = () => {
  images.forEach((image, index) => {
    const theta = index / images.length - progress.value
    const x = -Math.sin(theta * Math.PI * 2) * radius
    const y = Math.cos(theta * Math.PI * 2) * radius
    image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
    const c = Math.floor(index/images.length * 360)
    image.style.background = `hsla(${c}, 90%, 50%, .5)`
  })
}
gsap.ticker.add(animate)




// NOSOTROS


$(document).ready(function() {
    function checkFadeIn() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom - 50) {
                $(this).addClass('visible');
            }
        });
    }

    
    checkFadeIn();

    $(window).on('scroll', function() {
        checkFadeIn();
    });
});







