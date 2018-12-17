$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem(new Date(), $('.text-entry').val());
    var myItemInStorage = localStorage.getItem(new Date());
    console.log(new Date(), myItemInStorage);
    // create new key from timestamp


    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

  // delete all storage

});