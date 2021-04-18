// Variables

    // const: We are not allowed to change the value of the variable, so for example
    // you cant change the following hello to another string like 'maria'. The type 
    // of the following variable is not string, but 'world'
    const hello = "world";

    // if you want to be able to change the value of the variable, use let. Then the type
    // will be string and you will be able to change it. You still can not change the 
    // type of the variable.
    let hi = "world";

    // you can always assign splicitly the type of the variable, as the example below,
    // but typescript identifies by itself if you dont.
    let ola: string = "world";

    // All these variables will be converted into var on js file

    console.log('aaa', hello);
    console.log('aaa', hi);
    console.log('aaa', ola);

// Functions

    // Make sure you put the type of the argument when writing the function, in order
    // to garantee that whoever is using it in the future, will use the corect type.
    // You can/should also assign the type that will be return by the function by adding
    // : string after the parameters and before => as the example bellow
    const getFullName = (name: string, surname: string): string => {
        return name + " " + surname;
    };

    console.log(getFullName('Maria', 'Fernanda'));


// Objects and interfaces

    // interfaces help us to create objects with some properties. You can create an 
    // interface as shown bellow. Capital letter after 'interface'. All parameters
    // specified in interface will be mandatory. If you want to make it optional,
    // add '?' after the property name and before collom. If you use it, you get 
    // a really good autocomplete
    interface UserInterface {
        name: string;
        age?: number;
    }
    // You can specify what the type of each property of the object should be
    const user: UserInterface = {
        name: 'Maria',
        age: 26
    };

    // if you dont need an interface, you can specify the types as bellow
    const user2: {name: string; age: number} = {
        name: 'Fernanda',
        age: 27
    };

    // you can create a function inside an interface: 
    interface UserFunc {
        name: string;
        age?: number;
        getMessage(): string;
    }

    const userFunc: UserFunc = {
        name: 'Maria',
        getMessage() {
            return "Hello" + name;
        },
    };

    console.log(userFunc.getMessage());

// union operator

    let username: string = "alex";

    // to indicate some value can be of different types we use union operator as follows:
    let usernameUnion: string | number = "1";

    let errorMessage: string | null = null;

    interface UserInterface2 {
        name: string
        surname: string
    }

    let user22: UserInterface2 | null = null;

// creating types

    // You can create types with capital letters as:
    type PopularTags = string;
    const popularTags: PopularTags[] = ['dragon', 'coffee']

// union and types aliases
    type MaybePopularTag = PopularTags | null
    const dragonsTag: MaybePopularTag = null

// data types

    // use void to make clear that you dont return anything on that function 
    const doSomething = (): void => {
        console.log("doSomething");
    }

    // type 'any' turns off typescript checks on types. Avoid using it.
    let foo: any = "foo";
    
    // Unknown convert one type to another. Ex:
    let vUnknown: unknown = 10;
    let s2: string = vUnknown as string;

    let pageNumber: string = "1";
    let numericPageNumber: number = (pageNumber as unknown) as number;

// classes in typescript

// by default all properties are public. If you turn them into private, you can only
// use them inside the class, and protected inside the class and its children.
// Readonly property can not be changed

 class Dog {
    firstName: string;
    lastName: string;
    readonly unchangableName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

// inheritance makes possible to use the same methods and properties of the main class 
    class Cat extends Dog{
    }

    const dog = new Dog("Bob", "Dylan");
    console.log(dog)

    const cat = new Cat("Gar", "Field");
    console.log(cat.firstName)

// function that will take an obj and add an id to it
// <T> is a generic data type 
const addId = <T>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    };
};

const user33 = {
    name: "Jack",
};

const result = addId(user33);
console.log("Result", result);