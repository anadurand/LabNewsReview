'use strict';
const GetInfo = () => {
  state.noticias.forEach(function(item){
      item.categories.forEach(function(cate){
        if(cate == 5){
          state.carrousel.push(item);
        }
      });
      switch (item.categories[0]) {

        case 0:
                state.main.push(item);
          break;
        case 1:
                state.mundo.push(item);

          break;
        case 2:
                state.tecnologia.push(item);

          break;
        case 3:
                state.educacion.push(item);

          break;
        case 4:
                state.opinion.push(item);

          break;
        case 5:
                state.carrousel.push(item);

          break;
          default:
      }
  });
}
