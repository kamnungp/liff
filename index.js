// Import stylesheets
import './style.css';

import liff from "@line/liff";

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
const body = document.getElementById('body');

const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

const btnShare = document.getElementById('btnShare');

async function main() {
 liff.ready.then(() => {
   if (liff.getOS() === "ios") {
    body.style.backgroundColor = "#888888";
   }
   if (liff.isInClient()){
    getUserProfile();
   }
   btnShare.style.display = "block";
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
    alert("Msg was shared");
  }else{
    alert("Msg was not share");
  }
  liff.closeWindow();
}

btnShare.onclick = () => {
  shareMsg()
}