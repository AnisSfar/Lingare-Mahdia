$(window).scroll(function() {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 900);
});

// Array of wor*ds
var words = [
  "كان تحب تقدم بمشروعك والا فكرة مشروعك تفضل بحذانا",
  "Espace convivial"
];
// Function that executes every 2000 milliseconds
var t = setInterval(function() {
  // Random number generator
  var randomNumber = Math.round(Math.random() * (words.length - 1));
  // Change the word in the span for a random one in the array of words
  $("#texttochange").html(words[randomNumber]);
}, 1500);

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

//---------------firebasae---------------------------

function submit() {
  mail = document.getElementById("mail").value;
  sujet = document.getElementById("sujet").value;
  question = document.getElementById("question").value;
  document.location.reload();
  alert("Merci!");
  var data = {
    mail: mail,
    sujet: sujet,
    question: question
  };
  ref.push(data);
}
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAm571sop3rW83VDrR3VBjPUaQqx5fkJOs",
  authDomain: "lingare-mahdia-fd291.firebaseapp.com",
  databaseURL: "https://lingare-mahdia-fd291.firebaseio.com",
  projectId: "lingare-mahdia-fd291",
  storageBucket: "lingare-mahdia-fd291.appspot.com",
  messagingSenderId: "940465952731",
  appId: "1:940465952731:web:8ecac499908f4b28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("forms");

document.querySelector("#form").addEventListener("submit", function(e) {
  e.preventDefault();
  submit();
});

//////
//new WOW().init();
