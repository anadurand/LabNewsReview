'use strict';
const NavBAr = () => {
  const parent = $('<nav class="navbar menu"></nav>');
  const div =$('<div class="container-fluid"></div>');
  const divHeader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" arial-expanded="false"><img src="assets/img/menu.png"></button><a href="#" class="hidden-md hidden-lg"><img class="logo_mobile" src="assets/img/logoicon.png" class=""></a></div>')
  const menu = $('<div class="collapse navbar-collapse" id = "menu"><ul class="nav navbar-nav lista"><li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Perú</li><li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></div>');



  div.append(divHeader);
  div.append(menu);
  parent.append(div);

  return parent;

}
