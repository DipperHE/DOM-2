// const api = jQuery(".test"); // 不返回元素们，返回api对象
// api
//   .addClass("red") //遍历所有刚才获取的元素，添加.red
//   .addClass("blue")
//   .addClass("green"); //链式操作
// 以上代码可简写成下条代码
jQuery(".test1").addClass("red").addClass("blue").addClass("green");

jQuery(".test1").find(".child").addClass("red");
jQuery(".test1").addClass("white");

jQuery(".test1").find(".child").addClass("red").end().addClass("black");

const x = jQuery(".test1").find(".child");
x.each((div) => console.log(div));

const y = jQuery(".test1");
y.parent().print();

const z = jQuery(".test1");
z.children().print();

const $div = $("<div><span>1</span></div>");
$("body").append($div);

const $childList = $(".child");
$("body").append($childList);
