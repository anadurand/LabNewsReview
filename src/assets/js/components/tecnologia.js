'use strict';

const TecnoNews = (number) => {
  const parent = $('<div class="tecnoNews"></div>');
  const h3 = $('<h4 class="title">Tecnología</h4>');
  const linea = $('<hr class="linea" align="left">');
  const container1 = $('<div class=""></div>');
  const col1 = $('<div class="col-md-6"></div>');
  const col2 = $('<div class="col-md-6"></div>');
  const sub1 = $('<div class="col-md-6"></div>');
  const sub2 = $('<div class="col-md-6"></div>');
  const sub3 = $('<div class="col-md-12"></div>');
  const sub4 = $('<div class="col-md-12"></div>');


  sub1.append(News(state.tecnologia[1]));
  sub2.append(News(state.tecnologia[2]));
  sub3.append(News(state.tecnologia[3]));
  sub4.append(News(state.tecnologia[4]));


  col2.append(sub1);
  col2.append(sub2);
  col2.append(sub3);
  col2.append(sub4);

  col1.append(News(state.tecnologia[0]));
  container1.append(col1);
  container1.append(col2);



  parent.append(h3);
  parent.append(linea);
  parent.append(container1);
  return parent;
}
