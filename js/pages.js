var moveElements = function() {
  $( ".GX" ).animate({
    marginRight: "90%",
    marginTop: "-2.2in",
  }, 800 );

  $("#GXpic").animate({
    height: "120px",
    margin: "10px 0px 0px 20px",
  }, 800 );

  $(".bottom").animate({
    left: "50px",
    top: "-35px",
    minWidth: "150px",
    width: "150px",
  }, 800);

  moveSidebar();
}

var moveSidebar = function() {
  var styles = {
    position: "relative",
    left: "10px",
    top: "-30px",
    color: "white",
    padding: "5px 20px 5px 20px",
    margin: "5px",
  }

  var styles2 = {
    display: "block",
    width: "200px",
    padding: "10px",
    margin: "5px 0px 5px 0px",
  }

  $(".s").css(styles2);
  $(".sidebar").css(styles);
  $(".bottomheader").css("margin", "25px 0px 10px 0px");
}

var homePg = true;
$("#about").click(function() {
  alert("hy");
  moveElements();
  homePg = false;
  $("#contactpg").hide();
  $("#aboutmepg").show(900);
 });

$("#GXpic").click(function() {
  if (!homePg) {
    location.reload();
  }
});

$("#resume").click(function() {
  window.open('resume.pdf');
});

$("#contact").click(function() {
    if (homePg) {
    moveElements();
    homePg = false;
    $("#contactpg").show(900);
  } else {
    $("#aboutmepg").hide();
    $("#contactpg").show(900);
  }
});

$("#work").click(function() {
    moveElements();
    homePg = false;
    //$(".container").css("visibility","");
    $("#gallery").css("visibility","");
});
