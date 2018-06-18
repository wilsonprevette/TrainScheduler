// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWmpN0ZkIQiXYVKFEA7e0ELlp9h1F92qo",
  authDomain: "trainschedule-7a2e6.firebaseapp.com",
  databaseURL: "https://trainschedule-7a2e6.firebaseio.com",
  projectId: "trainschedule-7a2e6",
  storageBucket: "",
  messagingSenderId: "522211035942"
};

firebase.initializeApp(config);

var database = firebase.database().ref();

//set function to keep form from refreshing page
$("submit").on("click", function (event) {
  event.preventDefault();

//set variables for form inputs
  let train = $("#inputTrain").val()
  let desti = $("#inputDest").val()
  let time = $("#inputTime").val()
  let freq = $("#inputFreq").val()

//set firebase push function to append data
  database.ref().push({
    Name: train,
    Destination: desti,
    Time: time,
    Frequency: freq
  })

  $("#inputTrain").val(" ");
  $("#inputDest").val(" ");
  $("#inputTime").val(" ");
  $("#inputFreq").val(" ");
}

//set a function to have table capture values after submission
database.on("child_added", function(snapshot){
  let newTrain = snapshot.val().Name;
  let newDest = snapshot.val().Destination;
  let newTime = snapshot.val().Time;
  let Frequency = snapshot.val().Frequency;
})

//set function to display submitted elements on table