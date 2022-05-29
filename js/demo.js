$(()=>{
    //showing and hiding experience based on click

    $(document).on("click", "#expbtn1", function(){
        $("#expx1").show();
        $("#expbtn1").addClass("active78u");

        $("#expx2").hide();
        $("#expbtn2").removeClass("active78u");

        $("#expx3").hide();
        $("#expbtn3").removeClass("active78u");

        $("#expx4").hide();
        $("#expbtn4").removeClass("active78u");

        $("#expx5").hide();
        $("#expbtn5").removeClass("active78u");
    })

    $(document).on("click", "#expbtn2", function(){
        $("#expx1").hide();
        $("#expbtn1").removeClass("active78u");

        $("#expx2").show();
        $("#expbtn2").addClass("active78u");

        $("#expx3").hide();
        $("#expbtn3").removeClass("active78u");

        $("#expx4").hide();
        $("#expbtn4").removeClass("active78u");

        $("#expx5").hide();
        $("#expbtn5").removeClass("active78u");
    })
    $(document).on("click", "#expbtn3", function(){
        $("#expx1").hide();
        $("#expbtn1").removeClass("active78u");

        $("#expx2").hide();
        $("#expbtn2").removeClass("active78u");

        $("#expx3").show();
        $("#expbtn3").addClass("active78u");

        $("#expx4").hide();
        $("#expbtn4").removeClass("active78u");

        $("#expx5").hide();
        $("#expbtn5").removeClass("active78u");
    })
    $(document).on("click", "#expbtn4", function(){
        $("#expx1").hide();
        $("#expbtn1").removeClass("active78u");

        $("#expx2").hide();
        $("#expbtn2").removeClass("active78u");

        $("#expx3").hide();
        $("#expbtn3").removeClass("active78u");

        $("#expx4").show();
        $("#expbtn4").addClass("active78u");

        $("#expx5").hide();
        $("#expbtn5").removeClass("active78u");
    })
    $(document).on("click", "#expbtn5", function(){
        $("#expx1").hide();
        $("#expbtn1").removeClass("active78u");

        $("#expx2").hide();
        $("#expbtn2").removeClass("active78u");

        $("#expx3").hide();
        $("#expbtn3").removeClass("active78u");

        $("#expx4").hide();
        $("#expbtn4").removeClass("active78u");

        $("#expx5").show();
        $("#expbtn5").addClass("active78u");
    })

})