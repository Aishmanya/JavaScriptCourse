// Fetch() :- It is a global method to fetch a resource from network(internet), returning a promise which is fulfilled once the resource is available.

// say fetch karne me koi error 404 aaya then wo v response me he accept hoga kyuki fetch toh hua atleast , reject me tab jata jab fetch he nhi ho paya (toh our defined err aata).

// Syntax:- const/let response = fetch('something',{extra options to be passed})

// fetch has a queue called 'micro task queue/priority queue' jo sabse pehle execute hota like task queue se v pehle

/**
 * fetch happens in 2 parts:-
 * 1. Data space reservation jiske andar onfulfilled[] and onRejectionp[] 2 arrays hote to accept reponse/ reject of promise
 * 2. Web Browser/node based APIs handle karna jisme further wo network request krta to get some response if possible 
 * and send that to data for dataa to be fulfilled and hence back tor response varible to get on global memory
*/


// One Example code

fetch('some link')
.then((response)=>{
    return response.json() //to convert fetched data say api into json format
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))