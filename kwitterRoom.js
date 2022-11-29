
const firebaseConfig = {
  apiKey: "AIzaSyDrE-3cdMyB65Q3DIBf-AYkttmxQe6-ZtE",
  authDomain: "salinha-d2d85.firebaseapp.com",
  databaseURL: "https://salinha-d2d85-default-rtdb.firebaseio.com",
  projectId: "salinha-d2d85",
  storageBucket: "salinha-d2d85.appspot.com",
  messagingSenderId: "561528360571",
  appId: "1:561528360571:web:de2c5cea7aa96684e55cde"
};

firebase.initializeApp(firebaseConfig);
nome=localStorage.getItem("userName");

function addRoom() {
  roomName=document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    chave:"sla adicionada"

  });
  localStorage.setItem("roomName",roomName);
  window.location="kwitterPage.html";
}



function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    roomNames = childKey;
    console.log(roomNames);
    row="<div class='roomName' id=" + roomNames + "onclick='redirecionar(this.id)'>#" + roomNames + "</div> <hr>";
    document.getElementById("output").innerHTML+=row;
});
});

}

getData();

function redirecionar(name) {
  console.log(name);
  localStorage.setItem("roomName",name);
  window.location="kwitterPage.html";
  
}

function logout() {
  localStorage.removeItem("roomName");
  localStorage.removeItem("userName");
  window.location="index.html";
} 





