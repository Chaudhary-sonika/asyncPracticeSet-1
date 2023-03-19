// 1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedGreeting = () => {
    return (setTimeout(()=> console.log("Hello, welcome to my portfolio!"), 2000));
} 
// delayedGreeting();

// 2. Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAddition = (num1,num2)=>{
    return (setTimeout(()=> console.log(`${num1+num2}`), 4000));
}
// delayedAddition(3,4);

// 3. Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAlert = (str, num)=>{
    return (setTimeout(()=> alert(str), num));
}
// delayedAlert("Hello, world!", 2000);

//4. Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

const delayedLoop = (num) =>{for(let i = 0; i<num; i++){setTimeout(()=>{console.log("Hello");}, (i+1)*1000);}}
    
// delayedLoop(3);

// 5. Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve(`message from server: ${msg}`);
        }
        reject(`error from server: ${msg}`);
      }, 3000);
    });
  };

  fakeFetch("Hi")
  .then(data=>console.log(data))
