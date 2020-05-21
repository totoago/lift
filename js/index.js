//&(function(){ })()入口函数
$(function () {
  // 1.显示隐藏电梯导航
  //距离顶部距离 侧边盒子距离top
  var toolTop = $(".recommend").offset().top;

  toggleTool();

  //---------------定义显示侧边栏函数--------------------------------
  function toggleTool() {
    if ($(document).scrollTop() >= toolTop) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }
  //----------------------------------------------
  let flag = true;
  $(window).scroll(function () {
    toggleTool();
    // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
    //滚动判断
    if (flag) {
      $(".floor .w").each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          // console.log(i);
          //滚动控制侧列表
          $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
        }
      });
    }
  });

  // 2. 点击电梯导航页面可以滚动到相应内容区域===========
  //点击侧边栏判断
  $(".fixedtool li").click(function () {
    flag = false;
    // console.log($(this).index());
    // 当我们每次点击小li 就需要计算出页面要去往的位置
    // 选出对应索引号的内容区的盒子 计算它的.offset().top》》》10-偏移量
    var current = $(".floor .w").eq($(this).index()).offset().top - 10;
    // 页面动画滚动效果animate(参数，函数)
    $("body, html").stop().animate(
        {
          scrollTop: current,
        },
        function () {
          flag = true;
        }
      );
    // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    $(this).addClass("current").siblings().removeClass();
  });
});
