const selected = document.getElementById("clang");

selected.addEventListener('change', function(){
  var lang = selected.value;
  var npath = location.pathname;
  if(npath === "/index.html"){
    location.href = "https://furikake.f5.si/"+lang+npath;
  } else{
    var npath = npath.slice( 3 );
    location.href = "https://furikake.f5.si/"+lang+npath;
  }
});