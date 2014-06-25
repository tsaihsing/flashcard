$(function(){
var $showhide = $(".show_hide");
var $stickyfooter = $("#stickyfooter");
var $stickyfootertitle = $("#sticky_footer_title");

$stickyfooter.show();
$showhide.show();

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