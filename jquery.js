var hour;
var Details;
var appDetails = [{ hour, Details }];

function setTimes() {
    // Set all the times to appropriate  colour coding
    const timeVar = moment().format("H");
    console.log("timeVar is: " + timeVar);
    // for (var i =9; i< 6; i++){}
    $(".time-block").each(function (index) { //

        console.log($(this).attr("data-hour"));

        //       if ($(this).attr("data-hour") < 14)
        //           $(this).addClass("past");
        if ($(this).attr("data-hour") === timeVar) {
            $(this).addClass("present");
        }
        else if ($(this).attr("data-hour") > timeVar) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    });

}


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
    //  console.log(dateVar);
    $("#currentDay").text(dateVar); // Setting today's date.



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




function storeAppDetails() {
    $(document).ready(function () {
        $(".saveBtn").on("click", function (e) {
            e.preventDefault();
            var hour = $(this).attr("data-timeslot")
            var details = document.querySelector("#text" + hour).value;
            console.log(details);
            console.log(hour);
            appDetails.push(details);
            // localStorage.setItem(hour, JSON.stringify(details));
            localStorage.setItem(hour, details);
            // var storedAppDetails = JSON.parse(localStorage.getItem("appDetails"));
            var storedAppDetails = localStorage.getItem("appDetails");
            if (appDetails === "") {
                return; // return from function if submitted appointment is blank.
            }
            appDetails.push(details);
            details = "";
            console.log((localStorage.getItem("appDetails")));
            if (storedAppDetails !== null) {
                appDetails = storedAppDetails
            }
            renderAppDetails(); // re-render planner.


        });
    });


}
setTimes();
renderAppDetails();
storeAppDetails();

