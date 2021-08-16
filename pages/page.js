var firebaseConfig = {
    apiKey: "AIzaSyBqaZTIwyM69P4BV91yMgljFf6h6468ToI",
    authDomain: "hangsta-aa027.firebaseapp.com",
    databaseURL: "https://hangsta-aa027-default-rtdb.firebaseio.com",
    projectId: "hangsta-aa027",
    storageBucket: "hangsta-aa027.appspot.com",
    messagingSenderId: "883868316787",
    appId: "1:883868316787:web:7f019f1ba32431a36be606",
    measurementId: "G-V3V466ZRCD"
};
firebase.initializeApp(firebaseConfig);

var namee = document.getElementById('name');
var auth = document.getElementById('auth');
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('file');

fileButton.addEventListener('change', function(e){
    if (namee.value == '' && auth.value== ''){
        alert('Error: Please fill the name and author inputs')
    }
    else if(namee.value == ''){
        alert('Error: Please fill the name and author inputs')
    }
    else if(auth.value == ''){
        alert('Error: Please fill the name and author inputs')
    }
    else if(namee.value != '' && auth.value!= ''){
    var file = e.target.files[0];
    var storage = firebase.storage().ref('art/'+file.name);
    var name_art= namee.value;
    var name_auth= auth.value;
    var md = {
        customMetadata: {
            'Art': name_art,
            'Author': name_auth
          }
    };
    var task = storage.put(file,md);
    task.on('state_change',
        function progress(e){
            var percent = (e.bytesTransferred/e.totalBytes)*100;
            uploader.value=percent;
        },
        function error(err){
            console.log('Error: '+err)
            alert('Error: '+err)
        },
        function complete(){
            alert('Succesfully Uploaded')
            uploader.value = 0;
            fileButton.value = '';
            namee.value = '';
            auth.value = '';
        }
    )}
})