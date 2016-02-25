function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  $(".facebookLogin").hide();
  console.log(response);
  $("#name").text(response.name);
  $("#photo").attr('src', src="https://scontent.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/s480x480/1929885_10208103235368962_1354881501293616638_n.jpg?oh=556818295c2155e0898bcf6cd12cd36e&oe=575E5AAD" );

}