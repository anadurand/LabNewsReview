'use strict';

const MundoNews = () => {
  const parent = $('<div class="mundoNews"></div>');
  const h3 = $('<h4 class="title">Mundo</h4>');
  const linea = $('<hr class="linea" align="left">');
  const container1 = $('<div class="container pd-0 contenedor"></div>');
  const col1 = $('<div class="col-md-4 pd-l-0 newsGrande"></div>');
  const col2 = $('<div class="col-md-4 newsCentro"></div>');
  const col3 = $('<div class="col-md-4 pd-r-0 newsGrande"></div>');
  const sub1 = $('<div class="col-md-6 pd-l-0"></div>');
  const sub2 = $('<div class="col-md-6 pd-r-0"></div>');
  const sub3 = $('<div class="col-md-12 pd-l-0"></div>');
  const sub4 = $('<div class="col-md-12 pd-l-0"></div>');
  const container2 = $('<div class="container pd-0 contenedor"></div>');
  const col4 = $('<div class="col-md-3 pd-l-0"></div>');
  const col5 = $('<div class="col-md-3"></div>');
  const col6 = $('<div class="col-md-3"></div>');
  const col7 = $('<div class="col-md-3 pd-r-0"></div>');

  // console.log(state.mundo);
  sub1.append(News(state.mundo[1]));
  sub2.append(News(state.mundo[2]));
  sub3.append(News(state.mundo[4]));
  sub4.append(News(state.mundo[5]));

  col4.append(News(state.mundo[6]));
  col5.append(News(state.mundo[7]));
  col6.append(News(state.mundo[8]));
  col7.append(News(state.mundo[9]));

  col2.append(sub1);
  col2.append(sub2);
  col2.append(sub3);
  col2.append(sub4);

  col1.append(News(state.mundo[0]));
  col3.append(News(state.mundo[3]));
  container1.append(col1);
  container1.append(col2);
  container1.append(col3);

  container2.append(col4);
  container2.append(col5);
  container2.append(col6);
  container2.append(col7);


  parent.append(h3);
  parent.append(linea);
  parent.append(container1);
  parent.append(container2);
  return parent;
}
