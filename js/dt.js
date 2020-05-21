$(function () {
  //进入页面就调用
  showX();
  let flag = true;
  //封装显示函数
  function showX() {
    let top = $(document).scrollTop();
    if (top >= $(".recommend").offset().top) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }
  //显示电梯导航
  $(window).scroll(function () {
    showX();
    //遍历子元素个数
    if (flag) {
      let top = $(document).scrollTop();
      $(".floor>div").each(function (index, elm) {
        if (top >= $(elm).offset().top) {
          $(".fixedtool li")
            .eq(index)
            .addClass("current")
            .siblings()
            .removeClass();
        };
      });
    };
  });
  //电梯导航显示中，判断顶部距离
  $(".fixedtool li").click(function () {
    flag = false;
    //电梯按钮的索引值
    let index = $(this).index();
    //索引赋值页面相应模块，设置顶部距离
    let topVal = $(".floor>div").eq(index).offset().top+10;
    //设置返回动画
    $("html,body").animate(
      {
        scrollTop: topVal,
      },
      function () {
        flag = true;
      }
    );
    //改变按钮显示属性
    $(this).addClass("current").siblings().removeClass("current");
  });
  //返回顶部
  $(".getTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
