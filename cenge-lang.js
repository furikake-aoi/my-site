function langchange(event){
  const selected = document.getElementById('clang');
  const lan = selected.selectedIndex;
  const lang = selected.options[lan].value;
  var npath = location.pathname;
  if(npath.length === 1 || npath.startsWith('/index.html')){
    location.href = "https://furikake.f5.si/"+lang+"/index.html";
  } else{
    if(npath.startsWith('/zht')){var ntpath = str.slice( 4 )}
    else {var ntpath = npath.slice( 3 )}
    location.href = "https://furikake.f5.si/"+lang+ntpath;
  }
};