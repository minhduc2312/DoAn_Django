$(document).ready(
    function(){
        /*Sticky nav */
        $('.khoilop').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset:'1000px'
            }
        )
        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
    }
)

//Phân số

