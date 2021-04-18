// Variables
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const: We are not allowed to change the value of the variable, so for example
// you cant change the following hello to another string like 'maria'. The type 
// of the following variable is not string, but 'world'
var hello = "world";
// if you want to be able to change the value of the variable, use let. Then the type
// will be string and you will be able to change it. You still can not change the 
// type of the variable.
var hi = "world";
// you can always assign splicitly the type of the variable, as the example below,
// but typescript identifies by itself if you dont.
var ola = "world";
// All these variables will be converted into var on js file
console.log('aaa', hello);
console.log('aaa', hi);
console.log('aaa', ola);
// Functions
// Make sure you put the type of the argument when writing the function, in order
// to garantee that whoever is using it in the future, will use the corect type.
// You can/should also assign the type that will be return by the function by adding
// : string after the parameters and before => as the example bellow
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('Maria', 'Fernanda'));
// You can specify what the type of each property of the object should be
var user = {
    name: 'Maria',
    age: 26
};
// if you dont need an interface, you can specify the types as bellow
var user2 = {
    name: 'Fernanda',
    age: 27
};
var userFunc = {
    name: 'Maria',
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(userFunc.getMessage());
// union operator
var username = "alex";
// to indicate some value can be of different types we use union operator as follows:
var usernameUnion = "1";
var errorMessage = null;
var user22 = null;
var popularTags = ['dragon', 'coffee'];
var dragonsTag = null;
// data types
// use void to make clear that you dont return anything on that function 
var doSomething = function () {
    console.log("doSomething");
};
// type 'any' turns off typescript checks on types. Avoid using it.
var foo = "foo";
// Unknown convert one type to another. Ex:
var vUnknown = 10;
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
// classes in typescript
// by default all properties are public. If you turn them into private, you can only
// use them inside the class, and protected inside the class and its children.
// Readonly property can not be changed
var Dog = /** @class */ (function () {
    function Dog(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    Dog.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Dog;
}());
// inheritance makes possible to use the same methods and properties of the main class 
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Dog));
var dog = new Dog("Bob", "Dylan");
console.log(dog);
var cat = new Cat("Gar", "Field");
console.log(cat.firstName);
// function that will take an obj and add an id to it
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user33 = {
    name: "Jack"
};
var result = addId(user33);
console.log("Result", result);
