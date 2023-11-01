import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "../../components/ui/Button";

const Result = () => {
  const handleClickPDF = () => {
    console.log("asd");
  };
  return (
    <div className="app-layout result-page">
      <Container>
        <h1 className="hh-1 text-center">Project details:</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Client</th>
              <th>Contractor</th>
              <th>Project Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>sdf</td>
            </tr>
          </tbody>
        </Table>
        <h1 className="hh-1 text-center">All Axis:</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>X Max</th>
              <th>X Min</th>
              <th>Y Max</th>
              <th>Y Min</th>
              <th>Z Max</th>
              <th>Z Min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
        <div className="my-5 text-center">
          <Button
            onClick={() => handleClickPDF()}
            className="w-50 mt-4"
            type={"button"}
            name={"PDF"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Result;
