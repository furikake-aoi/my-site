function langchange(event){
  const selected = document.getElementById('clang');
  const lan = selected.selectedIndex;
  const lang = selected.options[lan].value;
  console.log(lang);
  var npath = location.pathname;
  if(npath === "/index.html"){
    location.href = "https://furikake.f5.si/"+lang+npath;
  } else{
    var ntpath = npath.slice( 3 );
    location.href = "https://furikake.f5.si/"+lang+ntpath;
  }
};