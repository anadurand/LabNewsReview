
const Carrousel = () => {
    const carrouselContainer = $("<section class='carrouselContainer'></section>");
    const titleCarrousel = $("<h2>Carrusel</h2>");
    const slider = $('<div class="owl-carousel owl-theme carrouselContainer__slider"></div>');
    // const prev = $('<div class="carrouselContainer__arrow owl-prev"></div>');
    // const next = $('<div class="carrouselContainer__arrow owl-next"></div>');
    console.log(state.carrousel);
    slider.append(Carr(state.carrousel[0]));
    slider.append(Carr(state.carrousel[1]));
    slider.append(Carr(state.carrousel[2]));
    slider.append(Carr(state.carrousel[3]));
    slider.append(Carr(state.mundo[7]));
    slider.append(Carr(state.mundo[6]));
    slider.append(Carr(state.mundo[8]));
    slider.append(Carr(state.mundo[9]));
    carrouselContainer.append(titleCarrousel);
    carrouselContainer.append(slider);
    // carrouselContainer.append(prev);
    // carrouselContainer.append(next);


    return carrouselContainer;

 }




