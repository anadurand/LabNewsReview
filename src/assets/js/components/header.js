'use strict';
const Header = () => {
  const parent = $('<header class="container-fluid visible-lg-block"></header>');
  const header = $('<div class="header row"></div>');
  const divLeft = $('<div class="col-xs-6 menu"></div>');
  const menu = $('<ul class="nav navbar-nav menu__left"><li><img src="assets/img/menu.png" class=""></i><span>sections</span></li><li><img src="assets/img/search.png" class=""></i><span>search</span></li></ul>');
  const divRight = $('<div class="col-xs-6"></div>');
  const media = $('<ul class="nav navbar-nav navbar-right menu__right"><li><img src="assets/img/fb.png" class=""></i></li><li><img src="assets/img/tw.png" class=""></i></li><li><img src="assets/img/in.png" class=""></i></li></ul>');
  const divLogo = $('<div class="row logo"><div class="col-xs-12"><img src="assets/img/logoicon.png" class=""></div></div>');
  const divInfo = $('<div class="col-xs-12 info"></div>');
  const date = $('<span></span>');
  const img = $('<span>|</span><img src="assets/img/cloud.png" class="">');
  const clima = $('<span> 22° </span>');
  //falta sacar temp por api
  divLeft.append(menu);
  divRight.append(media);
  header.append(divLeft);
  header.append(divRight);

  divInfo.append(date);
  divInfo.append(img);
  divInfo.append(clima);
  divLogo.append(divInfo);

  parent.append(header);
  parent.append(divLogo);

  var today = new Date();
  var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
  var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var dayName = days[today.getDay()];
  var dd = today.getDate();
  var mm = monthNames[today.getMonth()]; //enero 0
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = dayName +' , '+ dd +  ' de '+ mm + ' de ' +  yyyy;
  date.text(today);

  return parent;

}
