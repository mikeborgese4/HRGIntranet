$(document).ready(function(){

    console.log('ff');
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
