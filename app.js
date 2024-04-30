/* ///// yhn hm parameters r arguments ko hard coded lkhnge jsmn hmne bht c cheezen dkhi hn
ek t js trhn console pe krwte hn wo, dsra console pe direct parameters k srf name lkhn hn bs, 
teesra return krwya h parameters ko t wo ek wqt m srf ek hi para ko return krrh h, 4th 
parameters ko without console lkh k check kia h k run hta h ya nh lkn run nh hwa qk
ismn hmne functi ka synta use kia h js wjh se error aarh h */

/*function myFunction(name, edu, age) {
    // console.log(`hi my name is ${name}`)
    // console.log(`i am a student of ${edu}`)
    // console.log(`my age is ${age}`)
    // console.log(name, edu, age)
    return name
    return name, edu, age
    // name()
    // edu()
    // age()
}

console.log(myFunction("javeria", "inter", "20"))

// myFunction("javeria", "web development", "20")
// myFunction("aliza", "alima", 17) */

/*///// yhn bh hmne whi kaam kia h phle console pe krwya h then return se. */

/* function sum(a, b) {
    console.log(a + b)
    return a + b
}
sum(10, 20)
console.log(sum(10, 20))
console.log(sum(90, 2))
console.log(sum(20, 30)) */

/*////ab hmne ek step up leke function ko thra sa advance kia h jsmn hmn function ko cl krte time
argument m variable pass kia h */

/* let userName = prompt("Enter your name")
let userEdu = prompt("Enter your qualification")
let userAge = prompt("enter your age")

/* function myFunction(name, edu, age) {
    console.log(name, edu, age)
}

myFunction(userName, userEdu, userAge) */

/*////ab hmne ek step r lia h jsmn hmne funtion ko invoke krte time hi argument hta h zhir h t 
argument m hmne ek array ko pass krdia h */

/* let arr = [userName, userEdu, userAge]

function myFunction(userInp) {
    console.log(userInp)
}

myFunction(arr) */

/*///ab yhn hmne argument m direct hi prompt r alert ko use krdia koi variable ya koi array
use nh ki */

/* function myFunction(msg) {
    console.log(msg)
}

myFunction(prompt("enter your name"))
myFunction(alert("your name is javeria")) */

/*//// ab yhn hmne saari info ko ek array m krwake phr ek array ko return krwadia */

/* function myFunction() {
    let userName = prompt("tell me your name")
    let userEdu = prompt("tell me your qualification")
    let userAge = prompt("tell me your age")
    let userBio = [userName, userEdu, userAge]
    return userBio
}

console.log(myFunction()) */

/*//// ab hm parameter ko default vlue dte hn. r argument hard coded lkhnge */

/* function myFunction(name="javeria", edu="inter", age=20) {
    console.log(`hi my name is ${name} i am a student of ${edu} my age is ${age}`)
}

myFunction("aliza", "alima", "17")
myFunction() */

/*///// ab hm parameter ko default value t dnge lkn argument m variable pass krnge */

/*// let userName = "yasmeen"
// let userEdu = "matric"
// let userAge = "42"

let userName;
let userEdu;
let userAge;

function myFunction(name="javeria", edu="inter", age=20) {
    console.log(`my name is ${name}. my qualification is ${edu}. i am ${age} years old`)
}

myFunction(userName, userEdu, userAge) */

/*// ab hm parameter ko default value t dnge lkn argument m variable m prompt k through */

/* let userName = prompt("Enter your name")
let userEdu = prompt("Enter your qualification")
let userAge = prompt("enter your age")

function myFunction(name="javeria", edu="inter", age=20) {
    console.log(`hi my name is ${name} i am a student of ${edu} my age is ${age}`)
}

myFunction(userName, userEdu, userAge) */ // yhn pe isne kaam nh kia.

/*// ab hm JS m return statemnt ko dkhte hn k ks trhn ksi value ko return krwaskte hn */

/* function sum(a, b) {
    return a + b
}
// abhi phle t hm direct func ko console krwa dte hn:
console.log(sum(2, 3))
// ab hm funct ko variable m store krwake us var ko console krwte hn
let returnFuncVariable = sum(2, 3)
console.log(returnFuncVariable) */

/*// ab hm JS m return statemnt ko dkhte hn k ks trhn ksi variable ko return krwaskte hn */

/* function mul(a, b) {
    let myMulVal = a * b
    return myMulVal
}

// abhi phle t hm direct func ko console krwa dte hn:
console.log(mul(2, 3))
// ab hm funct ko variable m store krwake us var ko console krwte hn:
let returnMulFunc = mul(2, 3)
console.log(returnMulFunc) */

/*//let's make a marksheet using function: */
/* function subjectSum(urdu, eng, math) {
    let totalMarks = urdu + eng + math
    return totalMarks
}

function percentage(total) {
    let marksPercent = total/300 * 100
    return marksPercent
    // console.log(marksPercent)
}

let marks = subjectSum(40, 70, 60)
let percentageOfMarks = percentage(marks)

console.log(`your marks are ${marks}`)
console.log(`your percentage which is called final score: ${percentageOfMarks} %.`) */

/* function sumOfMarks(eng, urdu, math) {
    let sum = eng + urdu + math
    return sum
}

let score = sumOfMarks(80, 80, 80)
console.log(`your marks are ${score}.`)

function calculatePercentOfScore(total) {
    let percentage = total/300 * 100
    return percentage
}

let totalMarks = calculatePercentOfScore(score)
console.log(`your percentage is ${totalMarks}`) */