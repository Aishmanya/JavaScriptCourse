// 
// 2 things with Promises :- Create and Consume 

// Promise is like a promise to do something later and then telling that ultimately it was done or not 

// Promise has different states like running pending stopp etc.

const promise = new Promise(function(resolve,reject){ //this line is general syntax
    setTimeout(function(){
        resolve({username: "Manya", email:"manya@example.com"})
    }, 1000)
})

// This is resolving Promise
promise.then(function(user){
    console.log(user);
    // resolve wala parameter yahan aa jaega
})


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"manya" , password:"123"})
        }
        else{ // This is using reject
            reject('Error: Something went wrong')
        }
    },1000)
})

// Bracket ke andar is just a variable name 
promiseTwo.then((userr)=>{
    console.log(userr);
    return userr.username
    // destructuring karke v ye kiya ja skta h like(console.log(userr.username);) but we have 'Chaining Method' too using dounle triple this

})
.then((usname)=>{
    console.log(usname);
})
.catch(function(err){   // to catch errors
    console.log(err)
})
// .finally("done!") //wrong method
.finally(()=>{
    console.log("Done!")
})


// Promises using Aysnc await 
// isme errors acche se catch nhi hota but sometimes ye v needed say DB access kar rheh and agar connect he nhi hua toh I don't wanna proceed
// It basically wait for sometime for the work to happen and if it doesn't happens then gives error at the moment

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"ayush" , password:"123"})
        }
        else{ // This is using reject
            reject('Error: It went wrong')
        }
    },1000)

})

async function consumeProm3(){
    //promise is a obj so u don't write it llike this promiseThree()
    //try catch just for handling errors here
    try{
        const response = await promiseThree
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

// calling function :
consumeProm3()