// Import stylesheets
import './style.css';

import liff from "@line/liff";

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
const body = document.getElementById('body');
const shareimage = document.getElementById('shareimage');
const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

const btnShare = document.getElementById('btnShare');

async function main() {
  var urlParams = new URLSearchParams(window.location.search);
  var hash = window.location.hash;
  if (urlParams.has('param')){
    var param = urlParams.get('param').toString().trim();
    getImg(param);
  }
 liff.ready.then(() => {
   //if (liff.getOS() === "ios") {
   // body.style.backgroundColor = "#888888";
   //}
   
   if (liff.isInClient()){
    //getUserProfile();
    //alert(getQueryStringValues('param'));
    //shareMsg();
    
    if (urlParams.has('param')){
      var param = urlParams.get('param').toString().trim();
      //getImg(param);
      if (hash) {
        hash = hash.substring(1).trim();
        //alert(hash);
        if (param=="1"&&hash=="download"){
          sendImage(param);
        }else if (param=="2"&&hash=="download"){
          sendImage(param);
        }else if (param=="3"&&hash=="download"){
          sendImage(param);
        }else if (param=="4"&&hash=="download"){
          sendImage(param);
        }else if (param=="5"&&hash=="download"){
          sendImage(param);
        }else if (param=="1"&&hash=="share"){
          shareImg(param)
        }else if (param=="2"&&hash=="share"){
          shareImg(param)
        }else if (param=="3"&&hash=="share"){
          shareImg(param)
        }else if (param=="4"&&hash=="share"){
          shareImg(param)
        }else if (param=="5"&&hash=="share"){
          shareImg(param)
        }
      } 

    }
    
   }
   //btnShare.style.display = "block";
 })

  await liff.init({liffId:"1657383240-EW0gqdWp"});
}

main();

async function getUserProfile(){
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = "<b>userId: </b>"+profile.userId;
  displayName.innerHTML = "<b>displayName: </b>"+profile.displayName;
  statusMessage.innerHTML = "<b>statusMessage: </b>"+profile.statusMessage;
  email.innerHTML = "<b>email: </b>"+liff.getDecodedIDToken().email;
}

async function sendImage(obj){
    const result = await liff.sendMessages([
		{
		  type: 'image',
		  originalContentUrl: "https://www.groupzline.com/vancleef/wallpaper/"+obj+".jpg",
		  previewImageUrl: "https://www.groupzline.com/vancleef/wallpaper/"+obj+".jpg"
		}
	  ])/*.then(() => {
      alert("message sent");
    })
    .catch((err) => {
      alert(err);
    });*/

    if (result){
      //alert("Msg was shared");
    }else{
      //alert("Msg was not share");
    }
    liff.closeWindow();
}

async function getImg(obj){
  shareimage.src = "https://www.groupzline.com/vancleef/wallpaper/"+obj+".jpg";
  shareimage.style.display = "block";
}

async function shareImg(obj){
  const result = await liff.shareTargetPicker([
    {
      type: "image",
      originalContentUrl: "https://www.groupzline.com/vancleef/wallpaper/"+obj+".jpg",
      previewImageUrl: "https://www.groupzline.com/vancleef/wallpaper/"+obj+".jpg"
    }
  ])
  if (result){
    //alert("Msg was shared");
  }else{
    //alert("Msg was not share");
  }
  liff.closeWindow();
}

async function shareMsg(){
  const result = await liff.shareTargetPicker([
    {
      type: "text",
      text: "This msg was share message."
    },
    {
      type: "image",
      originalContentUrl: "https://www.groupzline.com/vancleef/images/stype301.jpeg",
      previewImageUrl: "https://www.groupzline.com/vancleef/images/stype301.jpeg"
    }
  ])
  if (result){
    //alert("Msg was shared");
  }else{
    //alert("Msg was not share");
  }
  liff.closeWindow();
}

/*btnShare.onclick = () => {
  shareMsg()
}*/

async function getQueryStringValues(key) {
  var arrParamValues = [];
  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  //alert(url);
  for (var i = 0; i < url.length; i++) {
      var arrParamInfo = url[i].split('=');

      if (arrParamInfo[0] == key || arrParamInfo[0] == key+'[]') {
          arrParamValues.push(decodeURIComponent(urlparam[1]));
      }
  }

  return (arrParamValues.length > 0 ? (arrParamValues.length == 1 ? arrParamValues[0] : arrParamValues) : null);
}