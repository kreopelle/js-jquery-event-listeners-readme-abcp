//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    '#tasty'.append;
  });
}

function pressIt() {
  $('form').on("keydown", function() {
    if (key.which == 83) {
      alert('key was pressed ')
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now");
  })
}