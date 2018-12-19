$(document).ready(function(){
  console.log('jQuery loaded');
  // var howFunc = prompt('How are you feeling?')
  // var whatFunc = prompt('What are you up to?')
  // var beforeFunc = prompt('What were you doing right before that?')
    var day = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('/');
    console.log(day);
    var agenda = {}
    var agendaItems = [];
    $('.btn-add').click(function(){
      // display the value here
      var agendaItem = $('.agenda-item').val()
      agendaItems.push(agendaItem);
      console.log(agendaItems);
      $('.agenda-display-field').append('<div>' +agendaItem + '</div>')
      }); // ??

    // write to local storage from input when button save   clicked
    $('.btn-submit').on('click', function(){
      localStorage.setItem(day, $('.text-entry').val());
      var myItemInStorage = localStorage.getItem(day);
      console.log(day, myItemInStorage);



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