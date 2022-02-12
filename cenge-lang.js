function langchange(event){
  const selected = document.getElementById('clang');
  const lan = selected.selectedIndex;
  const lang = selected.options[lan].value;
  var npath = location.pathname;
  console.log(npath);
  console.log(npath.startsWith('/en' || '/zht' || '/hi' || '/kt' || '/ja'))
  if(npath.startsWith('/en' || '/zht' || '/hi' || '/kt' || '/ja')){
    consolw.log('wow')
    //location.href = "https://furikake.f5.si/"+lang+"/index.html";
  } else{
    var ntpath = npath.slice( 3 );
    //location.href = "https://furikake.f5.si/"+lang+ntpath;
  }
};