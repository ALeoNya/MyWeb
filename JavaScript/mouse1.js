// var a_idx=0;
// jQuery(document).ready(function($){
//   addTips = function(e){

//     var i=$("<span />").text(a[a_idx]);
//     a_idx=(a_idx+1)%a.length;
//     var x=e.pageX,y=e.pageY;
//     i.css({
//       "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
//       "top":y-20,
//       "left":x,
//       "position":"absolute",
//       "font-weight":"bold",
//       "color":"#ff6651"
//     });

//     $("body").append(i);
//     i.animate({"top": y-180,"opacity":0},1500,function(){i.remove()})
//     return false;
//   }
//   //绑定鼠标左键
//   $("body").click(addTips);
//   //绑定鼠标左键
//   $("body").bind("contextmenu",addTips)
// });