  document.getElementById("btn-deposit").addEventListener('click',function(){
    const depositField= document.getElementById('deposit-field');

     const newDepositFieldString=depositField.value;
     const  newDepositFieldAmount= parseFloat(newDepositFieldString);
   
    const depositPrevious =document.getElementById("deposit-previous");
  const depositPreviousString=depositPrevious.innerText;
    
     const depositPreviousAmount=parseFloat(depositPreviousString)
    
     const currentDepositAmount=depositPreviousAmount + newDepositFieldAmount;
     depositPrevious.innerText=currentDepositAmount
//  end depoit---------------
  const previousBalance= document.getElementById('previous-balance');
 const previousBalanceString=previousBalance.innerText;
 const previousBalanceAmount=parseFloat(previousBalanceString);
 const currentBalanceAmount= previousBalanceAmount + currentDepositAmount;
  previousBalance.innerText=currentBalanceAmount;
  depositField.value=''
//  --------end balance-----------

})
 document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
const withdrawFieldString=withdrawField.value;
const newWithdrawFieldAmount=parseFloat(withdrawFieldString)
// // end new withdraw///
const withdrawPrevious =document.getElementById("withdraw-previous");


const withdrawPreviousString = withdrawPrevious.innerText;

const withdrawPreviousAmount = parseFloat( withdrawPreviousString );
const currentWithdrawAmount =withdrawPreviousAmount + newWithdrawFieldAmount
withdrawPrevious.innerText=currentWithdrawAmount


// present Balance...

const previousBalance= document.getElementById('previous-balance');
const previousBalanceString=previousBalance.innerText;
const previousBalanceAmount=parseFloat(previousBalanceString);
const currentBalanceAmount= previousBalanceAmount - newWithdrawFieldAmount;

previousBalance.innerText= currentBalanceAmount;
withdrawField.value=''
})


