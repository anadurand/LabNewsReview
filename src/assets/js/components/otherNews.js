'use strict';

const News = (info) => {

  const parent = $('<div class="news col-xs-12 pd-0"></div>');
  const divImg = $('<div class="news__Img"></div>');
  const img = $('<img src="" class="news__Img--img img-responsive">');
  const divInfo = $('<div class="news__info"></div>');
  const title = $('<p class="news__info--title"></p>');

  divImg.append(img);
  divInfo.append(title);
  parent.append(divImg);
  parent.append(divInfo);

  $(img).attr("src","assets/img/news/" + info.img);
  $(title).text(info.title);

  return parent;
}
// const Insertar = (number, container, array)=> {
//   for(var i= 1; i<=number; i++){
//     container.append(News(array[i]));
//   }
// }
