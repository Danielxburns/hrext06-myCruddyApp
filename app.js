$(document).ready(function(){
  console.log('jQuery loaded');
    var today = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('/');

    // set up agenda functionality
    var agenda = {};
    var agendaItems = [];
    $('.btn-add').click(function(){
      var $agendaItem = $('.agenda-item').val()
      agendaItems.push($agendaItem);
      $('.agenda-display-field').append('<li>' + $agendaItem + '</li>')
      $('.agenda-item').val('');
    });
    $('.btn-delete-item').click(function(){
      var $agendaItem = $('.agenda-item').val()
      $('li').filter(function() { return $.text([this]) === $agendaItem; }).remove();
      $('.agenda-item').val('');
    });
    $('.agenda-item').on('keydown', function(event){
      if(event.keyCode === 13) {
        $('.btn-add').click();
      };
    });

    // write to local storage from input when button save   clicked
    $('.btn-submit').on('click', function(){
      var morning = $('.morning').val();
      var data = {};
      var sleep = $('.sleep').val();
      var outlook  = $('.outlook').val();
      agenda.agendaItems = agendaItems;
      data.morning = morning;
      data.agenda = agenda;
      data.sleep = sleep;
      data.outlook = outlook;
      localStorage.setItem(today, JSON.stringify(data));
      var checkInInterval = ($('.interval').val()) * 3600000
      if(checkInInterval < 8000) {
        checkInInterval = 8000;
      };
      window.setInterval(function() {
        var howFunc = prompt('How are you feeling?');
        var whatFunc = prompt('What are you up to?');
        var beforeFunc = prompt('What was happening right before that?');
        var checkInTime = new Date().toTimeString().split(' ')[0];
        var checkIn = 'checkIn at ' + checkInTime;
        data[checkIn] = {
          how:howFunc,
          what:whatFunc,
          before:beforeFunc
        };
        localStorage.setItem(today, JSON.stringify(data));
      }, checkInInterval);
    });

    // delete all storage
    $('.btn-clearAll').click(function(){
      alert('Are you sure?');
      localStorage.clear();
    });
});