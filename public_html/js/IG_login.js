var igLoginButton = document.querySelectorAll('#ig_login');
console.log(igLoginButton);
igLoginButton[0].addEventListener('click', function(){
  console.log('clicked login button');
  var redirect_uri = "http://photo-project.herokuapp.com/loggedIn"
  window.location.href="https://instagram.com/oauth/authorize/?client_id=f2654ca86bdb473f907f7c2412ab7696&redirect_uri="+ redirect_uri +"&response_type=token";}, false);