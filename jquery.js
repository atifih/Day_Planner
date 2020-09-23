var hour;
var Details;
var appDetails = [{ hour, Details }];

function renderAppDetails() {

    //loop from 9 till 12

    /*
    for (var i = 9; i <= 12; i++) {
        var str = i.toString();
        var tex;
        console.log((localStorage.getItem(str)));
        tex = (localStorage.getItem(str));
        if (tex !== null) {
            $(".container").append(tex);
        }
    }
    //loop from 1 till 5
    for (var j = 1; j <= 5; j++) {
        var str = j.toString();
        var tex;

    */

    const dateVar = moment().format("dddd Do MMMM YYYY");
    console.log(dateVar);
    $("#currentDay").text(dateVar);

    $("#text9").val(localStorage.getItem("9"));
    $("#text10").val(localStorage.getItem("10"));
    $("#text11").val(localStorage.getItem("11"));
    $("#text12").val(localStorage.getItem("12"));
    $("#text1").val(localStorage.getItem("1"));
    $("#text2").val(localStorage.getItem("2"));
    $("#text3").val(localStorage.getItem("3"));
    $("#text4").val(localStorage.getItem("4"));
    $("#text5").val(localStorage.getItem("5"));

}

/*
    if (tex !== null) {

        $(".container").append(tex);
    }
    //get element by id for the respective hour
    //set the text of the element you retrieved to tex
}






}




/*
function init(){
storedappDetails = JSON.parse(localStorage.getItem("Details"));
 
}
 
*/

function storeAppDetails() {
    $(document).ready(function () {
        $(".saveBtn").on("click", function (e) {
            e.preventDefault();
            var hour = $(this).attr("data-timeslot")
            var details = document.querySelector("#text" + hour).value;
            console.log(details);
            console.log(hour);
            appDetails.push(details);
            localStorage.setItem(hour, JSON.stringify(details));
            var storedAppDetails = JSON.parse(localStorage.getItem("appDetails"));
            console.log((localStorage.getItem("appDetails")));
            if (storedAppDetails !== null) {
                appDetails = storedAppDetails;
            }



        });
    });


}
renderAppDetails();
storeAppDetails();

