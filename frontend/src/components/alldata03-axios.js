//Latest Good Stuff but really worked on this file yet
import React, { Component, useContext } from "react";
import axios from "axios";
// import { Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import lamp from "../images/lamp.jpg";

// import { UserContext } from "../App";

const Record = (props) => (
  <tr>
    <td>{props.record.user_name}</td>
    <td>{props.record.user_email}</td>
    <td>{props.record.user_password}</td>
    <td>{props.record.user_balance}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);


// const AllData = () => {
  
//   const context = useContext(UserContext);

//   return (
//     <>
//     <Card style={{ width: '33rem' }}>
//         <Card.Img variant="top" src={lamp} />
//         <Card.Body className="table-container">
//           <Table striped bordered hover variant="light">
//             <thead>
//               <tr>
//                 <th>Userame</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {context.users.map((item) => {
//                 return (
//                   <tr>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.password}</td>
//                     <td>{item.balance}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//     </>
//   );
// };

// export default AllData;



export default class RecordList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
      super(props);
      this.deleteRecord = this.deleteRecord.bind(this);
      this.state = { records: [] };
    }
  
    // This method will get the data from the database.
    componentDidMount() {
      axios
        .get("http://128.199.160.31:5050/record/")
        .then((response) => {
          this.setState({ records: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    // This method will delete a record based on the method
    deleteRecord(id) {
      axios.delete("http://128.199.160.31:5050/record/" + id).then((response) => {
        console.log(response.data);
      });
  
      this.setState({
        record: this.state.records.filter((el) => el._id !== id),
      });
    }
  
    // This method will map out the users on the table
    recordList() {
      return this.state.records.map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={this.deleteRecord}
            key={currentrecord._id}
          />
        );
      });
    }
  
    // This following section will display the table with the records of customers.
    render() {
      return (
        <div>
          <h3>Record List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>{this.recordList()}</tbody>
          </table>
        </div>
      );
    }
  }
  