
//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

//<script>
//function setup(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfholbWOBTo9hN3MKPCBctHKgXe6oS1ow",
    authDomain: "testefirebase-8de5c.firebaseapp.com",
    databaseURL: "https://testefirebase-8de5c.firebaseio.com",
    projectId: "testefirebase-8de5c",
    storageBucket: "testefirebase-8de5c.appspot.com",
    messagingSenderId: "700311153101",
    appId: "1:700311153101:web:f4f276413bd7fea09c7c84",
    measurementId: "G-NMMSRDRDCG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();
//</script>
//}
console.log(firebase);
var database = firebase.database();
console.log("database   "+database);
var fruits = database.ref('fruits');

var data = {
  name: 'pear',
  count: 7
}
console.log(data);
//fruits.push(data);
//database.push(data);
fruits.push(data);
