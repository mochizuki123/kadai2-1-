

// $ ←これがjQueryになります！🤗
$("#playBtn1").on("click", function () {
var num = Math.floor(Math.random() * 4) ;
//ランダム値に応じて画像を変える
document.getElementById("message").innerHTML = "何がでるかな？";
// setTimeout(next, 100);

function audio() {
  document.getElementById("btn-audio").currentTime = 0;
  document.getElementById("btn-audio").play();
}
console.log(num, "ハコの中身"); // num, で選ばれた数字をコンソール表示
// alert("おみくじが出ました！")

if (num===0) {
    console.log("大吉")
  $("h1").html("おめでとう！大吉");
  $("h1").css("color", "red");
  $("#omikuji").attr("src","./images/angel.png") ;
  
}else if (num===1) {
    console.log("中吉")
  $("h1").html("おめでとう！中吉");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/king.png");
  
}else if (num===2) {
    console.log("吉")
  $("h1").html("悪くない！吉");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/knite.png");
  

}else if (num===3) {
    console.log("凶")
  $("h1").html("残念 凶…");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/satan.png") ;

}else if (num===4) {
    console.log("中吉")
  $("h1").html("おめでとう！中吉");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/king.png");

}else if (num===5) {
      console.log("大吉")
  $("h1").html("おめでとう！大吉");
  $("h1").css("color", "red");
  $("#omikuji").attr("src","./images/angel.png") ;
}

  // この下は消さない🤗
});


// 以下はボタン２

$("#playBtn2").on("click", function () {
var num = Math.floor(Math.random() * 4) ;
//ランダム値に応じて画像を変える
document.getElementById("message").innerHTML = "何がでるかな？";
// setTimeout(next, 100);

console.log(num, "ハコの中身"); // num, で選ばれた数字をコンソール表示
// alert("おみくじが出ました！")

if (num===0) {
    console.log("凶")
  $("h1").html("残念 凶…");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/satan.png") ;
  
}else if (num===1) {
      console.log("凶")
  $("h1").html("残念 凶…");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/satan.png") ;

  }else if (num===2) {
    console.log("凶")
  $("h1").html("がーん、最凶");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/death.png") ;

}else if (num===3) {
    console.log("凶")
  $("h1").html("がーん、最凶");
  $("h1").css("color", "black");
  $("#omikuji").attr("src","./images/death.png") ;
}
$("button").html("もう一度！");

});




