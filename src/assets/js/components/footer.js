'use strict';

const Footer = () => {
  const container =$('<footer class=""></footer>');
  const parent = $('<div class="footer"></div>');
  const col1 = $('<div class="col-md-3 col-xs-12 footer__logo"></div>');
  const img = $('<img src="assets/img/logo-footer.png" class="footer__logo--img">');
  const p1 = $('<p>© Editado por Laboratoria <br> Av. José Pardo #601 Lima 1 Perú <br> Copyright © Laboratoria.la <br> Todos los derechos reservados.</p><div class="visible-xs">Ver más</div>');
  const col2 = $('<div class="col-md-4 hidden-xs footer__info"></div>');
  const p2 = $('<ul><li><span>director general:</span><br>Francisco Miró Quesada Cantuarios</li><li><span>director periodistico:</span><br>Fernado Berckemeyer Olaechea</li><li><span>suscripciones</span><br>suscriptores@comercio.com.pe</li><li><span>publicidad online:</span><br>fonoavisos@comercio.com.pe</li><li><span>club el comercio:</span><br>clubelcomercio@comercio.com.pe<br>Compromiso de Autorregulación Comercial</li></ul>');
  const col3 = $('<div class="col-md-5 hidden-xs footer__terms"></div>');
  const ul = $('<ul><li>TÉRMINOS Y CONDICIONES DE USO</li><li>TRABAJA CON NOSOTROS</li><li>LIBRO DE RECLAMACIONES</li><li>SEDES PRINCIPALES</li><li>POLÍTICAS DE PRIVACIDAD</li></ul>');
  const ulMedia = $('<ul class="media"><li><span>SÍGUENOS:</span></li><li><img src="assets/img/facebook-32.png"></li><li><img src="assets/img/twitter-32.png"></li><li><img src="assets/img/linkedin-32.png"></li></ul>');
  const btn = $('<div class="btn-subir hidden-xs"><img src="assets/img/flecha3.png"><p>SUBIR</p></div>');


  col1.append(img);
  col1.append(p1);
  col2.append(p2);
  col3.append(ul);
  col3.append(ulMedia);

  parent.append(col1);
  parent.append(col2);
  parent.append(col3);

  container.append(parent);
  container.append(btn);

  btn.on("click", (e)=> {
    e.preventDefault();
    $("body,html").animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  return container;
}
