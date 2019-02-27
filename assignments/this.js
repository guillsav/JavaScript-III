/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding : 
     When the this keyword points towards the global excecution context it refers to the window object. 
  
* 2. Implicit Binding: 
     Are for Objects Literals. To know what the this keyword applies to we need to look at where the method was invocked! 
     (Looking to the left of the method we will find out to object the this keyword refers to in the method).

* 3. New Binding: Allows to create a "blueprint" of an object in a function constructor. By binding the an object to the function constructor,
     with the "new" keyword the new object will get the properties that are defined within the constructor function.
    
* 4. Explicit Binding: 
     Are for functions. And can be used with 3 methods : .apply() .call()  & .bind(). 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(`\n === Principle 1 ===`);
// code example for Window Binding
console.log(this);

//
// Principle 2
console.log(`\n === Principle 2 ===`);
// code example for Implicit Binding
const student = {
  name: 'Steven',
  school: 'Lambda School',
  course: 'Full Stack Web',
  introduce: function() {
    console.log(
      `Hi! My name is ${this.name} I am currently enrolled in the ${
        this.course
      } course from ${this.school}.`
    );
  }
};

student.introduce();

//
// Principle 3
console.log(`\n === Principle 3 ===`);
// code example for New Binding
function Teacher(attrs) {
  console.log(attrs);
  this.name = attrs.name;
}

const teacher = new Teacher({
  name: 'Wes Bos'
});

console.log(teacher);

//
// Principle 4
console.log(`\n === Principle 4 ===`);
// code example for Explicit Binding
const fruit = {
  name: 'Pineapple',
  destination: 'Amsterdam'
};

function shipped() {
  console.log(
    `The ${this.name.toLowerCase()}s are getting shipped to ${
      this.destination
    }.`
  );
}

shipped.call(fruit);
