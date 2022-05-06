var firebaseConfig = {
            apiKey: "AIzaSyCR8LrglVYKsaRaOVRe-vZLZvoBb5npWJg",
            authDomain: "kwitter-project-1daa2.firebaseapp.com",
            databaseURL: "https://kwitter-project-1daa2-default-rtdb.firebaseio.com",
            projectId: "kwitter-project-1daa2",
            storageBucket: "kwitter-project-1daa2.appspot.com",
            messagingSenderId: "920999992642",
            appId: "1:920999992642:web:f2cf6f9c91866c0b21fcdb"
    };
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}