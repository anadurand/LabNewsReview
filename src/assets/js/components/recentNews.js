'use strict';

const RecentNews = (number) => {
  const parent = $('<div class="actualNews"></div>');
  const firstNews = $('<div class="firstNews col-xs-12"></div>');
  const divInfo = $('<div class="firstNews__info"></div>');
  const title = $('<h2 class="firstNews__info--title"></h2>');
  const brief = $('<p class="firstNews__info--brief"></p>');
  const actualNews = $('<div class="row"></div>');
  const new1 = $('<div class="act-news col-md-6"></div>');
  const new2 = $('<div class="act-news col-md-6 pd-0"></div>');
  const subNew1 = $('<div class="col-md-6"></div>');
  const subNew2 = $('<div class="col-md-6"></div>');



  divInfo.append(title);
  divInfo.append(brief);
  firstNews.append(divInfo);
  firstNews.css("background-image",'url("assets/img/news/'+state.main[0].img+'")');
  title.text(state.main[0].title);
  brief.text(state.main[0].brief);
  new1.append(News(state.main[1]));
  subNew1.append(News(state.main[2]));
  subNew2.append(News(state.main[3]));


  // Insertar(3, actualNews, state.main);
  new2.append(subNew1);
  new2.append(subNew2);
  actualNews.append(new1);
  actualNews.append(new2);
  parent.append(firstNews);
  parent.append(actualNews);
  return parent;
}
