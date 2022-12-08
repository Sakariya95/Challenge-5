const clock = document.getElementById("clock");
setInterval(() => {
    const now = moment();
    const readable = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readable;

}, 1000);


    var saveBtn = document.querySelectorAll(".saveBtn");
    
    saveBtn.forEach(function(node) {
       
        node.addEventListener("click", function() {
           
            var description = $(this).siblings(".description").val();
            
            var time = $(this).parent().attr("id");
            
            localStorage.setItem(time, description);
    
        })
    });
    
    
    $("#hour1 .description").val(localStorage.getItem("hour-1"));
    $("#hour2 .description").val(localStorage.getItem("hour-2"));
    $("#hour3 .description").val(localStorage.getItem("hour-3"));
    $("#hour4 .description").val(localStorage.getItem("hour-4"));
    $("#hour5 .description").val(localStorage.getItem("hour-5"));
    $("#hour6 .description").val(localStorage.getItem("hour-6"));
    $("#hour7 .description").val(localStorage.getItem("hour-7"));
    $("#hour8 .description").val(localStorage.getItem("hour-8"));
    $("#hour9 .description").val(localStorage.getItem("hour-9"));
    $("#hour10 .description").val(localStorage.getItem("hour-10"));
    

    var elements = $(".time-block");
    var d = new Date();
    var h = d.getHours();


    for (i = 0; i < elements.length; i++) {
        var t = parseInt(elements[i].getAttribute("data-hour"));

        if (h < t) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        } else if (h > t) {
            elements[i].classList.add('past');
            elements[i].classList.remove('future');
            elements[i].classList.remove('present');
        } else if (h === t) {
            elements[i].classList.add('present');
            elements[i].classList.remove('future');
            elements[i].classList.remove('past');
        } else if (h > 16 && h < 9) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }
    }