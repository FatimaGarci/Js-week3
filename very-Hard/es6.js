class Person {
    name;
    job;
    age;

    constructor(name, job, age){ // Answer for #1 
        this.name = name;
        this.age = age;
        this.job = job;
    }

    exercise(){  // Answer for #2
        console.log(`Running is fun! -- said no one ever`);
    }

    fetchJob(){ // Answer for #3 
        console.log(`${this.name} is a ${this.job}`)
    }
}

var p1 = new Person ('Darwin', 'R2H', 19);

p1.exercise();
p1.fetchJob();



class Programmer extends Person{

    constructor(name, job, age, lenguages){
        super(name, job, age);
        this.lenguages = lenguages;
        this.busy = true;
    }

    completeTask(){
        this.busy = false;
    }

    acceptNewTask(){
        this.busy = true;
    }

    offerNewTask(){
        if(this.busy){
            console.log(`${this.name} can't accept any task right now.`)
        }else {
            console.log(`${this.name} would love to take on anew task.`)
        }
    }

    learnLanguages(newLang){
        this.lenguages.push(newLang);
    }

    listLanguages(){
        for ( var x = 0; x < this.lenguages.length; x++ ){
            console.log(this.lenguages[x])
        }
    }


}

var p2 = new Programmer ('Ana', 'Developer', 19, ['Node', 'Java']);

console.log(p2.busy);
p2.completeTask();
console.log(p2.busy);
p2.acceptNewTask();
p2.offerNewTask();
console.log(p2.lenguages);
p2.learnLanguages('MYSQL');
p2.listLanguages();