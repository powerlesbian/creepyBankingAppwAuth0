//Latest Good Stuff but not finished added clear form and success alert.
import React, { useContext, useState} from 'react';
import piggyWhiskyLand from '../images/piggyWhiskyLand.jpg';
import {Card, Button, Form}  from 'react-bootstrap';
// import { BalanceContext} from './balance';
import { UserContext } from '../App';

      //cut this below part to move to Deposit02
    //   if ((isDeposit === true) && newTotal >=70){
    //   alert("Success! You are building good saving habits, invest it wisely 🧐.")};


  const Deposit = () => {
    const context = useContext(UserContext);
    const [depositAmount, setDepositAmount] = useState(0);
    const [wbalance, setNewBalance] = useState(context.users[0].balance);
    // const [submitted, setSubmitted] = useState(false);

console.log(`Account Rendered: ${wbalance}`);
//setNewBalance should trigger success alert
//const balance = initialState;


    const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setDepositAmount(Number(event.target.value));
    event.preventDefault();
  };
 

  function UpdateBalance() {
    let newTotal = wbalance + depositAmount
    setNewBalance(newTotal);
    alert(`Congrats! You've just made a BIG FAT deposit of $ ${depositAmount}.✨ Your balance will be updated.`)
    setDepositAmount('');
    // context.users[0].balance.push =wbalance

    context.users.unshift({ name:'current user', email:'n/a', password:'n/a', balance: newTotal});
    // BalanceContext=newTotal;
    //how to get newTotal to useState and useContext?
  }

      return (


  <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src={piggyWhiskyLand} alt="tasty beverage"/>

<Card.Body>
<Card.Title id = "total">Account Balance Fiat ${wbalance} </Card.Title><pre></pre>
<Form onChange={handleChange} >

<label className="label huge">
      Deposit: &nbsp;&nbsp;&nbsp;
      <input id= "depositAmount" type="number" width="15%" min="1" placeholder="Positive num only" value={depositAmount}></input>
      &nbsp;<Button  variant="outline-secondary" size="sm" type="button"  onClick={UpdateBalance}>Deposit now</Button>
    </label>

</Form>
</Card.Body>

</Card>   

      );
  }

export default Deposit;
