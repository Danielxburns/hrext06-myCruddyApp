$(document).ready(function(){
  console.log('jQuery loaded');
  // var howFunc = prompt('How are you feeling?')
  // var whatFunc = prompt('What are you up to?')
  // var beforeFunc = prompt('What were you doing right before that?')
    var day = function()

    // write to local storage from input when button save   clicked
    $('.btn-submit').on('click', function(){
      localStorage.setItem(new Date(), $('.text-entry').val());
      var myItemInStorage = localStorage.getItem(new Date());
      console.log(new Date(), myItemInStorage);


      // display the value here
      $('.list-display-field').text(myItemInStorage); // ??

    });

    // delete from local storage when delete button clicked
    $('.btn-delete').on('click', function(){
      localStorage.removeItem('inputFieldValue');
    });

    // delete all storage
    $('.btn-clearAll').click(function(){
      localStorage.clear();
    })
});