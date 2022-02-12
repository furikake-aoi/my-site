function langchange(event){
  const selected = document.getElementById('clang');
  const lan = selected.selectedIndex;
  const lang = selected.options[lan].value;
  var npath = location.pathname;
  console.log(npath);
  if(npath === "" || npath.startsWith('/index')){
    location.href = "https://furikake.f5.si/"+lang+npath;
  } else{
    var ntpath = npath.slice( 3 );
    location.href = "https://furikake.f5.si/"+lang+ntpath;
  }
};