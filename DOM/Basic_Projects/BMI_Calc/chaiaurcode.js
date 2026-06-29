const form=document.querySelector('form')

// ab height width yahan par outside form access nhi krenge warna empty value aaega and we don't want that in this usecase

form.addEventListener('submit', function(e){
    e.preventDefault() //we need to avoid default submit action of form

    ht=parseInt(document.querySelector('#height').value) //.value se hmlog koi input tag ke andar ka value mil jata h but ow string me hota toh we convert that to int using parseInt
    wt=parseInt(document.querySelector('#weight').value)

    result= document.querySelector('#results')

    if (ht=='' || ht<0 || isNaN(ht)){        // isNaN is a standard way ehere isNaN means Not a Number
        // console.log('height value is incorrect')    wrong way
        result.innerHTML='height value is incorrect'
    }
    else if (wt=='' || wt<0 || isNaN(wt)){        
        result.innerHTML='weight value is incorrect'
    }
    else{
        const bmi=(wt/((ht**2)/10000)).toFixed(2) //fix decimal places to 2 digit
        result.innerHTML = bmi
        
    }
    
})

// elif is not a thing in JS