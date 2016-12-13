$(document).ready(function() {

$('div.tab2').hide();
$('div.tab3').hide();

  $('li.tab1').click(function(){
  alert('test');
  $('div.tab2').show();
    });
});



// $(document).ready(function() {
//
// $('ul.tabs li').css('cursor', 'pointer');
//
// $('ul.tabs.tabs1 li').click(function(){
//   var thisClass = this.className.slice(0,2);
//   $('div.t1').hide();
//   $('div.t2').hide();
//   $('div.' + thisClass).show();
//   $('ul.tabs.tabs1 li').removeClass('tab-current');
//   $(this).addClass('tab-current');
//   });
//
// });
