
$(document).ready(function() {

    $(".errorContainer").hide();
    const query = new URLSearchParams(window.location.search);
    const page = query.get('page');
    let file = "json/"+page+ ".json";
    if(page){

        $.ajax({
            url: 'jsofn/'+page+ '.json',
            dataType: 'json',
            success: function( data ) {
               populate(data)
            },
            error: function( data ) {
                showError();
            }
        });
    }
    else{
        // Show the error landing page
        showError();
    }


});
function populate(data){


    $("#headerText").text(data.title);
    $("#title").text(data.title);
    $("#mainImg").prop("src","images/pictures/"+data.img);
    data.links.forEach((link)=>{
       let $btn =
           '    <button type="button" class="btn btn-teal col-sm-10 col-md-4 offset-1">'        +
           '        <a class="tealLink" href="'+link.url+'">'                                   +
           '            <img src="images/logos/'+link.logo+'" class="navbar-brand" alt="gg">'   +
                        link.text                                                               +
           '        </a>'                                                                       +
           '    </button>';
        $("#links").append($btn);
    });

}

function showError(){
    $('.mainContentContainer').hide();
    $(".errorContainer").show();
    let seconds = 10;
    setInterval(function() {


        if (seconds.toString().length == 1) {
            seconds = "0" + seconds;
        }

        document.getElementById("time").innerHTML = seconds+" second(s).";
        seconds--;
        if (seconds == 0) {
            window.location.href = "index.html";
        }

    }, 1000);



}



/*  switch (page) {
        //set the image and then set the file
        case "rad":

            break;
        case "nurse":

            break;
        case "ct":


            break;
        case "mri":


            break;
        case "nucmed":


            break;
        case "ultra":


            break;
        case "xray":

            break;
        case "scheduling":


            break;
        case "precert":


            break;
        case "hr":


            break;
        case "accounting":


            break;
        case "management":


            break;
        case "it":

            break;

        default:
    }*/
