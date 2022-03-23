var screenNumb = 1;

function changeScreen(screenNum) {
  if(screenNum == 1){
    document.getElementById("image1").src = "Screen1.png";
    document.getElementById("button1").style.display = "block";
    document.getElementById("button5").style.display = "none";
    document.getElementById("password1").style.display = "none";
    document.getElementById("send1").style.display = "none";
    document.getElementById("cancel1").style.display = "none";
    screenNumb = 1;
  } else if(screenNum == 2) {
    screenNumb = 2;
    document.getElementById("wifiPassword").value = "";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
  } else if(screenNum == 3) {
    screenNumb = 3;
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("image1").src = "Screen3.png";
    document.getElementById("button4").style.display = "block";
  } else if(screenNum == 4) {
    screenNumb = 4;
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("image1").src = "Screen4.png";
    document.getElementById("button5").style.display = "block";
    document.getElementById("password1").style.display = "block";
  }
}
const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

var password = "";
function logKey(e) {
  if(document.getElementById("wifiPassword").value != "") {
    if(event.keyCode == 13) {
      console.log("fake Connecting...");
      changeScreen(1);
      getPassword();
    }
    if(screenNumb == 4){
      document.getElementById("image1").src = "Screen5.png";
      document.getElementById("send1").style.display = "block";
      document.getElementById("cancel1").style.display = "block";
    }
  } else {
    document.getElementById("send1").style.display = "none";
    document.getElementById("cancel1").style.display = "none";
  }
}

function getPassword() {
  console.log("Connected!");
  console.log("well... Congratulations! You have cracked the password. :O");
  console.log("\n\n\n\n\n");
  password = document.getElementById("wifiPassword").value;
  console.warn("password: " + password);
  
  /* Get the text field */
  var copyText = document.getElementById("wifiPassword");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  console.warn("Password copied to clipboard!");
  window.open("https://google.com", '_blank');
}