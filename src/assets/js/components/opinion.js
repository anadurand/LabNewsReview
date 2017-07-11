'use strict';

const OpNews = () => {
  const parent = $('<div class="opinionNews"></div>');
  const h3 = $('<h4 class="title">OPINIÓN</h4>');
  const linea = $('<hr class="linea" align="left">');
  const container1 = $('<div class="container-fluid"></div>');
  const col1 = $('<div class="col-md-3"></div>');
  const col2 = $('<div class="col-md-3"></div>');
  const col3 = $('<div class="col-md-3"></div>');
  const col4 = $('<div class="col-md-3"></div>');

  // console.log(state.opinion);
  col1.append(News(state.opinion[0]));
  col2.append(News(state.opinion[1]));
  col3.append(News(state.opinion[2]));
  col4.append(News(state.opinion[3]));

  container1.append(col1);
  container1.append(col2);
  container1.append(col3);
  container1.append(col4);


  parent.append(h3);
  parent.append(linea);
  parent.append(container1);

  return parent;
}
