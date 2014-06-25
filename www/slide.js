function showAndPlay(inObj){
  var read = $(inObj).attr('data-read').split(',');
  console.log(read);
  var elem = ['Con1','Vow1','Con2','Vow2','Con3','Vow3'];
  for(var i = 0; i < elem.length; i++){
    $('#' + elem[i]).html(read[i]);
  }
  $('.cardimg').html('<img src="data/' + localStorage['cat_selection'] + '/img/' + read.join('') + '.jpg"/>');
  $('#player1').attr('src', 'data/' + localStorage['cat_selection'] + '/mp4/' + read.join('') + '.m4a');
  $('#player1').trigger('play');
}

var foot_prep = '';

$(function(){
  $.ajax('data/' + localStorage['cat_selection'] + '/' + localStorage['cat_selection'] + '.csv')
        .done(function( data ) {
      var results = $.parse(data, {
          header: false,
          dynamicTyping: false,
          step: function(data, file, inputElem) {
              data.results.forEach(function(data){
                if(data[0] != '單辭'){
                  var attribute = new Array();
                  for(var i = 0; i < 3; i++){
                    attribute.push( data[ 1+i*3 ] );
                    attribute.push( data[ 2+i*3 ] );
                  }
                  foot_prep += '<li><img src="data/' + localStorage['cat_selection'] + '/img/' + attribute.join('') + '.jpg" data-read="' + attribute.join() + '" onclick="showAndPlay(this)" /></li>';
                  console.log(data);
                }
              });
              $('#footer_menu').html(foot_prep);
          }
      });
  });

var $showhide = $(".show_hide");
var $stickyfooter = $("#stickyfooter");
var $stickyfootertitle = $("#sticky_footer_title");

$stickyfooter.show();
$showhide.show();

$('.bt-sound').click(function(){
    $('#player1').trigger('play');
});

$('.cardarea').click(function(){
  $('#player1').trigger('play');
});

$showhide.click(function(){
    var showMenu = $("#stickyfooter").css("display") == "block";

    $stickyfooter.slideToggle("slow");

    if(showMenu )
    {
        $stickyfootertitle.animate({
            bottom:'0px'
        }, "slow");
    }
    else
    {
       $stickyfootertitle.animate({
            bottom:'110px'
        }, "slow");
    }
});

});//]]>
