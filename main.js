let section = document.getElementById("skills");

window.onscroll = function(){
  if (window.scrollY >= section.offsetTop - 100){
    document.getElementById("html").style.width = '80%';
    document.getElementById("css").style.width = '85%';
    document.getElementById("java-s").style.width = '70%';
    document.getElementById("python").style.width = '80%';
  }
}
