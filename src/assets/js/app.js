
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');
  wrapper.append(Header());
  wrapper.append(NavBAr());
    if(state.page == null){
      wrapper.append(RecentNews(3));
      wrapper.append(MundoNews());
      wrapper.append(TecnoNews());
      wrapper.append(EduNews());
      wrapper.append(OpNews());

    }else {
      wrapper.append(DetailNews(update));
    }

  // wrapper.append(Footer());
  root.append(wrapper);

}

const update = function() {
  render(root);
}

const state = {
  page: null,
  noticias: null,
  main: [],
  mundo: [],
  tecnologia: [],
  educacion: [],
  opinion: [],
  carrousel: []
};

$( _=>{
  const root = $('.root');
  $.get('/api/news/', (result) => {
    if (!result) { return alert('no hay data');}
    state.noticias = result;
    GetInfo();
    render(root);
  });

});
