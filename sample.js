function hello(name) {
    console.log("Hello " + name + "!");
}
var your_name = "hoge";
hello(your_name);
var v_bool = true;
var v_num = 123;
var v_str = "ABCDEFG";
var v_null = null;
var v_undef = undefined;
var v_arr1 = ["Red", "Green", "Blue"];
var v_arr2 = ["Red", "Green", "Blue"];
var v_tuple = ["Yamada", 26];
var v_obj = { "name": "Yamada", "age": 26 };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var v_enm = Color.Green;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var val_class = new MyClass();
var v_any = 4;
function func(arg) { }
;
function log(msg) {
    console.log(msg);
}
function error(msg) {
    throw new Error(msg);
}
