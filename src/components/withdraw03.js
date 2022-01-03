//Latest Good Stuff but not finished cleared input box after submit!  Good!

import React, { useContext, useState} from 'react';
import macaron from '../images/macaron.JPG';
import {Card, Button, Form}  from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
// import { BalanceContext} from './balance';
import { UserContext } from '../App';



  const Withdraw = () => {
    const context = useContext(UserContext);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [wbalance, setNewBalance] = useState(context.users[0].balance);

console.log(`Account Rendered: ${wbalance}`);
//setNewBalance should trigger success alert
//const balance = initialState;


    const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setWithdrawAmount(Number(event.target.value));
    event.preventDefault();
  };
 

  function UpdateBalance() {
    if (wbalance >= withdrawAmount) {
    let newTotal = wbalance - withdrawAmount
    setNewBalance(newTotal);
    setWithdrawAmount('');
    alert(`Congrats! You've just withdrew $ ${withdrawAmount}. Spend it wisely. Your balance will be updated.`)
    // context.users[0].balance = wbalance; 
    context.users.unshift({ name:'current user', email:'n/a', password:'n/a', balance: newTotal});
  
  }

    if (wbalance < withdrawAmount){
      alert (`Your requested withdraw of ${withdrawAmount} is rejected as overdrafts are not allowed. Please amend and try again.`)
    }
    // useContext(newTotal);
    //how to get newTotal to useState and useContext?
  }

      return (


  <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src={macaron} alt="tasty food"/>

<Card.Body>
<Card.Title id = "total">Account Balance Fiat ${wbalance} </Card.Title><pre></pre>
<Form onChange={handleChange} >

<label className="label huge">
      Withdraw: &nbsp;&nbsp;&nbsp;
      <input id= "WithdrawAmount" type="number" width="15%" min="1" placeholder="Positive num only" value={withdrawAmount}></input>
      &nbsp;<Button  variant="outline-secondary" size="sm" type="button"  onClick={UpdateBalance}>Withdraw now</Button>
    </label>

</Form>
</Card.Body>

</Card>   

      );
  }

export default Withdraw;
