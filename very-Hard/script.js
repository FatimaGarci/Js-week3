/*

VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has threess: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
 
*/


/* IIFE - Immediately Invoked Function Expression 
    If you wrap all of your code inside an IFFE, no global variables are exposed to the JavaScript namespace.

*/
/*  Solution for Very Hard question */


(function() { // I wrapped all the code in an IIFE (Immediately Invoked Function Expression / Closure). If you do this, then no global variables are exposed to the JavaScript namespace so we don't have any scope issues
    function Person(name, age, job) {  // Answer for #1 
        this.name = name;
        this.age = age;
        this.job = job;
    }

    Person.prototype.exercise = function() { // Answer for #2 
        return 'I love exercising!';
    };

    Person.prototype.fetchJob = function() { // Answer for #3 
        return  this.name + ' is a ' + this.job + ' developer'; // We use concatenation to combine the string 'Name' and then print out a variable name 
    };

    function Programmer(name, job, age, languages) { // Answer for #4 
        Person.call(this, name, job, age); // use call because we want to inherit the properties name,job, and age from Person
        this.languages = languages;
        this.busy = true;
    };

    Programmer.prototype.completeTask = function(){  // Answer for #5 part 1 
        this.busy = false; // make the Progammer not busy so they can accept new tasks 
    };

    Programmer.prototype.acceptNewtask = function(){ // Answer for #5 part 2 
        this.busy = true; // make the Progammer busy so they can no longer accept new tasks 
    };

    Programmer.prototype.offerNewTask = function() { // Answer to #6 
        if (this.busy) {
            return 'Sorry, I am busy.';
        } else {
            return 'Sure, I can accept a new task!';
        }
    };

    Programmer.prototype.listLanguages = function() { // Answer for #7 part 1 
        return this.languages;
    };

    Programmer.prototype.learnLanguage = function(newLanguage) { // Answer for #7 part 2 
        this.languages.push(newLanguage);
    };


    /* Answers for #8 - testing out the object inheritance */
    var nick = new Person('Nick', 26, 'Front End'); // create a new Person object 
    console.log(nick.exercise());
    console.log(nick.fetchJob());

    var nerd = new Programmer('Sam', 23, 'Back End', ['Java', 'HTML', 'Python']);
    
    console.log(nerd.offerNewTask()); // Sorry, I am busy.
    nerd.completeTask(); // Complete the task 
    console.log(nerd.offerNewTask()); // Sure, I can accept a new task! 

    console.log('List of languages before adding any...');
    console.log(nerd.listLanguages()); // It prints out the array of 3 languages
    nerd.learnLanguage('CSS'); // Add CSS to the languages array
    
    console.log('List of languages after adding one...');
    console.log(nerd.listLanguages()); // Now it prints out the array of all 4 languages because we successfully added CSS to the languages array 
 
})();

// console.log(nick) - This won't work because we wrapped all the code in a closure. We protected the global scope / namespace.