//phele hm log 5 me banana sikh rahe promise ko
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//main promise
const promiseFour = new  Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(error === false){
            resolve({username: "yash", password: "1234"})
        }else{
            reject(console.log("ERROR: Something went wrong"));
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");//ye default jaise hota hai chalta hi chalta hai ye bas batata hai ki ho gaya baki reject hua ya resolve ye dekh lo
    
})

//ye uper vale jaise hi hai bas thoda alag hai kyuki isme hmne try and catch ko use kiya hau
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const repose = await promiseFive
        console.log(Response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//yaha promise aayga to usko kaise use kare vo hoga:


//tarika 1
// async function getAllUsers(){
//     try {
//         //await use kiya jata hai vaha jaha per fun ko time lage 
//         const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() //json me karne me bhi time lagta hai
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()

//tarika 2
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(respone){
    return respone.json()
})
.then(function(data){
    console.log(data);    
})
.catch(function(error){
    console.log(error);
})

// promise.all
// yes this is also available, kuch reading aap b kro.