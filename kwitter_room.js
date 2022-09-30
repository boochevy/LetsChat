
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBkGPkfPLxT8UE1vxXJuOMPkHNlSpLRXGk",
      authDomain: "kwitter-9ebb6.firebaseapp.com",
      projectId: "kwitter-9ebb6",
      storageBucket: "kwitter-9ebb6.appspot.com",
      messagingSenderId: "718241934956",
      appId: "1:718241934956:web:7ac1be15c982b4c13ab249",
      measurementId: "G-VKCLVDZTP8"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_Names);
row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>"
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roon_name" ,name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}