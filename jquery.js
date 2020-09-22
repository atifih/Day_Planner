
$(document).ready(function () {
    $(".saveBtn").on("click", function (e) {
        e.preventDefault();
        var hour = $(this).attr("data-timeslot")
        var details = document.querySelector("#text" + hour).value;
        console.log(details);
        console.log(hour);
        var appointment = localStorage.setItem(hour, details);
        console.log(appointment);
    });
});