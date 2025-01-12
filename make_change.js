const $ = selector => document.querySelector(selector);

const processEntry = () =>{
    const usreEntry = parseInt($('#cents').value);
    if (usreEntry >=0 && usreEntry<=99)
    {
      MakeChange(usreEntry);
    }
    else
    {
        alert('Score must be a valid number from 0 through 99');
    }
};

const MakeChange= (usreEntry)=>{

    const quarters = Math.floor(usreEntry / 25);
    const resultantQuarters = usreEntry % 25;
    const dimes = Math.floor(resultantQuarters / 10);
    const resultantDimes = resultantQuarters % 10;
    const nickels = Math.floor(resultantDimes / 5);
    const pennies = resultantDimes % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};


document.addEventListener("DOMContentLoaded", function() {
    $("#calculate").addEventListener("click", processEntry);
});
