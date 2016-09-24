//Counter code
var button = document.getElementById("counter");

button.onclick = function(){
  
  //Create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take an action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
          
      }
  };
  
  //Make a request
  request.open('GET', 'http://jithijose.imad.hasura-app.io/counter', true);
  request.send(null);

};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('btn_submit');
submit.onClick = function(){
    //Make the request to server and send name
    
    //Capture the list of name and render as HTML
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0; i < names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
};


















