$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
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