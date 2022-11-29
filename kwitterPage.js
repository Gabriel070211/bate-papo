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

    var nomedasala=localStorage.getItem("rommName");
    var nomedousuario=localStorage.getItem("userName");

    function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(nomedasala).push({
            name:nomedousuario,
            mensagem:msg,
            like:0,
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+nomedasala).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            childData = childSnapshot.val();
            console.log(childKey);
            console.log(childData);
      if(childKey != "chave") {
            firebaseMessageId = childKey;
            messageData = childData;
            nome=messageData['name'];
            mansagem=messageData['mensagem'];
            like=messageData['like'];
            nameWithTag = "<h4> "+ nome +"<img class='user_tick' src='tick.png'>";
            messageWithTag = "<h4 class='message_h4'>" + mansagem + "</h4>";
             like_button ="<button class='btn btn-warning' id="+ firebaseMessageId +" value="+ like +" onclick='updateLike(this.id)'>";
            spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
            qvcquiser=nameWithTag + messageWithTag + like_button + spanWithTag;
            document.getElementById("output").innerHTML += qvcquiser;S

         


      } });  }); }
getData();
function logout () {
      localStorage.removeItem("roomName");
      localStorage.removeItem("userName");
      window.location="kwitterRoom.html";
}


function updateLike(mensagemId) {
     buttonId = mensagemId;
     likes= document.getElementById(buttonId).value;
     updateLike = Number(likes) + 1;
     firebase.database().ref(nomedasala).child(mensagemId).update({
      like:updateLike
     });
}
