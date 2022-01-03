//Latest Good Stuff but really worked on this file yet
import React, { useContext } from "react";
import { Table, Card } from "react-bootstrap";
import lamp from "../images/lamp.jpg";

import { UserContext } from "../App";

const AllData = () => {
  const context = useContext(UserContext);

  return (
    <>
    <Card style={{ width: '33rem' }}>
        <Card.Img variant="top" src={lamp} />
        <Card.Body className="table-container">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Userame</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {context.users.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    </>
  );
};

export default AllData;
