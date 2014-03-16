var urlHash = window.location.hash;
if (urlHash){
  var delimiter = '#access_token=';
  var access_token = urlHash.substring(urlHash.indexOf(delimiter)+delimiter.length);
  var feedEl = $('#feed');
  var myStylesLoc = "css/styles.css";
  $.ajax({
    url: "https://api.instagram.com/v1/users/self/",
    data: {'access_token': access_token},
    dataType: 'jsonp'
  }).done(function(response){
      console.log(response);
      $('#ig_login').hide();
      infoStr = '';
    	infoStr += "<p>"
      infoStr += "@"
      infoStr += response.data.username;
      infoStr += "<br>"
    	infoStr += response.data.full_name;
      infoStr += "<br>"
    	infoStr += response.data.bio;
    	infoStr += "</p>"
    $('#feed').append(infoStr);
  });
  $.ajax({
    url: "https://api.instagram.com/v1/users/self/media/recent",
    data: {'access_token': access_token},
    dataType: 'jsonp'
  }).done(function(response){
      console.log(response);
      $('#ig_login').hide();
      imageStr = '';
      for (i in response.data){
      	imageStr += "<a href='";
      	imageStr += response.data[i].images.standard_resolution.url;
      	imageStr += "'>";
      	imageStr += "<img src='";
      	imageStr += response.data[i].images.thumbnail.url;
      	imageStr += "'></a>";
        if (response.data[i] === "videos"){
          imageStr += "<a href='";
          imageStr += response.data[i].videos.standard_resolution.url;
          imageStr += "'>"
          imageStr += "<img src='";
          imageStr += response.data[i].images.thumbnail.url;
          imageStr += "'></a>";
        }
      }
      $('#feed').append(imageStr);
      $('#feed').collapsibleset('refresh');
    });


}
else{
  //login
  var igLoginButton = document.querySelectorAll('#ig_login');
  console.log(igLoginButton);
  igLoginButton[0].addEventListener('click', function(){
  console.log('clicked login button');
  var redirect_uri = "http://photo-project.herokuapp.com/"
  window.location.href="https://instagram.com/oauth/authorize/?client_id=f2654ca86bdb473f907f7c2412ab7696&redirect_uri="+ redirect_uri +"&response_type=token";}, false);
}
