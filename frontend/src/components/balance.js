//Latest doesn't work yet, needs to get updated after deposits and withdraws
//reference how it's done through User creation

import  React, { useContext, useState } from 'react';
// import AllData from './alldata02';
// import Withdraw from './withdraw02';
import { UserContext } from "../App";



//need a way to figure out below:

// function handleBalance() {
//   console.log(balance);

// BalanceContext = useContext(balance-withdrawAmount+depositAmount); 

// }
const Balance = ()=>{
const context = useContext(UserContext);
// const [balance, setNewBalance ] = useState(BalanceContext[0]);
console.log(context);
const displayBalance = useState(context.users[0].balance);

  return (
<>
    <h1>    Your current balance is ${displayBalance}</h1>
    <h4> If something seems dodgy with your money, panic immediately. No one can help you.</h4>
</>

  )
}

export default Balance;