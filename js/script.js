$(document).ready(function(){
    $(".clickable1").click(function(){
        $(".img1").toggle();
        $(".design1").toggle();
    });
    $(".clickable2").click(function(){
        $(".img2").toggle();
        $(".dev").toggle();
    });
    $(".clickable3").click(function(){
        $(".img3").toggle();
        $(".product").toggle();
    });
});
$(document).ready(function(){
$("#port1").mouseover(function(){
    $(".port1").show();
})
    .mouseout(function(){
    $(".port1 ").hide();
});
$("#port2").mouseover(function(){
    $(".port2").show();
})
    .mouseout(function(){
    $(".port2").hide();
});
$("#port3").mouseover(function(){
    $(".port3").show();
})
    .mouseout(function(){
    $(".port3").hide();
});
$("#port4").mouseover(function(){
    $(".port4").show();
})
    .mouseout(function(){
    $(".port4").hide();
});
$("#port5").mouseover(function(){
    $(".port5").show();
})
    .mouseout(function(){
    $(".port5").hide();
});
$("#port6").mouseover(function(){
    $(".port6").show();
})
    .mouseout(function(){
    $(".port6").hide();
});
$("#port7").mouseover(function(){
    $(".port7").show();
})
    .mouseout(function(){
    $(".port7").hide();
});
$("#port8").mouseover(function(){
    $(".port8").show();
})
    .mouseout(function(){
    $(".port8").hide();
});
});
$(document).ready(function(){
    $("form").submit(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        alert(name+' thanks for feedback');
    });
});
