// ASYNC

// Some Basic Infos
//  JavaScript is Asynchronus(as it is line by line code run hota) and Single Threaded

// Execution Context :- Executes one line of code at a time
    //    -> Call Stack    -> Memory Heap

// and Each operation waits for the last one to complete before executing


// ~~~~~~~~~ Blocking Code Vs Non Blocking Code ~~~~~~~~~~
/**
 * Blocking Code :- 
 * 1. Blocks the flow of the program (like jab tak ye kaam ho ni jata baki kuch nhi karna)
 * 2. It reads the file synchronously ( i.e jab tak read nhi ho jata don't do anything)
 
 * Non Blocking Code :-
 * 1. Does not block execution
 * 2. Read file Async
 */

// ++++++++++++++++ SELF Learn   "SET TIMEOUT SET INTERVAL AND FETCH" +++++++++++++++++++++

// setTimeout(function(),time in ms) :- kitne time ke baad ye chij ko karwana h !
// It is a function/method only but sath me ek api v call karta
// ye continuously nhi chalta 

// setInterval :- ye continuously chalta rehta certain interval ke gap me


// setTimeout , setInterval are a part of Async only
// and Async ke liye hamesha web pe he request nhi bhejna hota Async is based on JS only [learn more through gpt] 

// default engine of JavaScript is Sync but whole JS  is Async as it itself includes APIs n all needed to convert Sync to Async.



