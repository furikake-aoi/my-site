function langchange(event){
  const selected = document.getElementById('clang');
  const lan = selected.selectedIndex;
  const lang = selected.options[lan].value;
  var npath = location.pathname;
  console.log(npath);
  console.log(npath.startsWith('/en' || '/zht' || '/hi' || '/kt' || '/ja'))
  if(npath.length === 1 || npath.startsWith('/index.html')){
    console.log('https://furikake.f5.si/'+lang+'/index.html')
    //location.href = "https://furikake.f5.si/"+lang+"/index.html";
  } else{
    if(npath.startsWith('/zht')){var ntpath = str.slice( 4 )}
    else {var ntpath = str.slice( 3 )}
    console.log('https://furikake.f5.si/'+lang+'ntpath')
    //location.href = "https://furikake.f5.si/"+lang+ntpath;
  }
};