$(document).ready(function(){
/*

    let count = 0;
    let i;
    for ( i = 0; i < 100000000; i++) {
        let x=  Math.random() * (1 +1)-1 ;
        let y=  Math.random() * (1 +1)-1;

        let s = Math.pow(((x*x)+ (y*y)), .5);
        if (s<1){
            count ++;
        }
    }
    count = count * 4
    let pi = count /100000000;
    console.log(pi);



*/





    $( ".nav-item" ).hover(
        function() {
            $( this ).addClass('show');
            $( this ).find('.nav-link').attr("aria-expanded", "true");
            $( this ).find('.dropdown-menu').addClass('show');;

        }, function() {
            $( this ).removeClass('show');
            $( this ).find('.nav-link').attr("aria-expanded", "false");
            $( this ).find('.dropdown-menu').removeClass('show');;
        }
    );
});


