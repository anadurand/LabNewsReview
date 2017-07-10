'use strict';

const EduNews = () => {
  const parent = $('<div class="eduNews"></div>');
  const h3 = $('<h4 class="title">Educación</h4>');
  const linea = $('<hr class="linea" align="left">');
  const container1 = $('<div class="container-fluid"></div>');
  const col1 = $('<div class="col-md-6"></div>');
  const col2 = $('<div class="col-md-6"></div>');
  const sub1 = $('<div class="col-md-6"></div>');
  const sub2 = $('<div class="col-md-6"></div>');
  const sub3 = $('<div class="col-md-12"></div>');
  const sub4 = $('<div class="col-md-6"></div>');
  const sub5 = $('<div class="col-md-6"></div>');
  const sub6 = $('<div class="col-md-12"></div>');


  sub1.append(News(state.tecnologia[0]));
  sub2.append(News(state.tecnologia[1]));
  sub3.append(News(state.tecnologia[2]));

  sub4.append(News(state.tecnologia[3]));
  sub5.append(News(state.tecnologia[4]));
  sub6.append(News(state.tecnologia[5]));

  col2.append(sub4);
  col2.append(sub5);
  col2.append(sub6);

  col1.append(sub1);
  col1.append(sub2);
  col1.append(sub3);

  container1.append(col1);
  container1.append(col2);


  parent.append(h3);
  parent.append(linea);
  parent.append(container1);
  return parent;
}
