import React, { useState } from "react";
import "./Home.scss";
import { Row, Col, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

// hook form
import { Controller, useForm } from "react-hook-form";
const Home = () => {
  const [activeTab, setActiveTab] = useState("step_1");

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const handleClickNext = (type) => {
    setActiveTab(type);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="app-layout">
      <Container className="home-wrapper multi-step-block">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs
            activeKey={activeTab}
            onSelect={(key) => handleClickNext(key)}
            transition={true}
            id="multi-step"
            className="tab-wrapper"
          >
            <Tab eventKey="step_1" title="Step 1">
              <h1 className="hh-1 text-center">
                Please fill in step-1 details:
              </h1>
              <Row>
                <Col md={6}>
                  <Controller
                    name="project_name"
                    control={control}
                    rules={{
                      required: "Project Name is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="text"
                        name="project_name"
                        label="Project Name*"
                        error={errors?.project_name?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="client"
                    control={control}
                    rules={{
                      required: "Client name is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="text"
                        name="client"
                        label="Client*"
                        error={errors?.client?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="contractor"
                    control={control}
                    rules={{
                      required: "Contractor name is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="text"
                        name="contractor"
                        label="Contractor*"
                        error={errors?.contractor?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="project_description"
                    control={control}
                    rules={{
                      required: "Project description is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        fieldType="textAreaField"
                        type="textarea"
                        name="project_description"
                        label="Project Description*"
                        row={4}
                        value={value}
                        onChange={onChange}
                        error={errors?.project_description?.message}
                      />
                    )}
                  />
                </Col>
                <Col md="12 d-flex justify-content-center">
                  <Button
                    onClick={() => handleClickNext("step_2")}
                    className="w-50 mt-4"
                    type={"button"}
                    name={"Next"}
                  />
                </Col>
              </Row>
            </Tab>
            {/* step 2 */}
            <Tab eventKey="step_2" title="Step 2">
              {/* step 1 data showing */}
              <Row className="justify-content-center">
                <Col md={6}>
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
                </Col>
              </Row>
              <h1 className="hh-1 text-center">
                Please fill in step-2 details:
              </h1>
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload CSV file:</Form.Label>
                    <Form.Control type="file" accept=".csv" />
                  </Form.Group>
                </Col>
                {/* x axis */}
                <Col md={6}>
                  <Controller
                    name="max_x"
                    control={control}
                    rules={{
                      required: "Max X is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="max_x"
                        label="Max X*"
                        error={errors?.max_x?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="min_x"
                    control={control}
                    rules={{
                      required: "Min X is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="min_x"
                        label="Min X*"
                        error={errors?.min_x?.message}
                      />
                    )}
                  />
                </Col>
                {/* y axis */}
                <Col md={6}>
                  <Controller
                    name="max_y"
                    control={control}
                    rules={{
                      required: "Max Y is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="max_y"
                        label="Max Y*"
                        error={errors?.max_y?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="min_y"
                    control={control}
                    rules={{
                      required: "Min Y is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="min_y"
                        label="Min Y*"
                        error={errors?.min_y?.message}
                      />
                    )}
                  />
                </Col>
                {/* z axis */}
                <Col md={6}>
                  <Controller
                    name="max_z"
                    control={control}
                    rules={{
                      required: "Max Z is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="max_z"
                        label="Max Z*"
                        error={errors?.max_z?.message}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="min_z"
                    control={control}
                    rules={{
                      required: "Min Z is required",
                    }}
                    render={({ field: { value = "", onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        fieldType="textField"
                        type="number"
                        name="min_z"
                        label="Min Z*"
                        error={errors?.min_z?.message}
                      />
                    )}
                  />
                </Col>
                {/* button */}
                <Col md="12">
                  <Row>
                    <Col xs={6}>
                      <Button
                        onClick={() => handleClickNext("step_1")}
                        className="w-100 mt-4"
                        type={"button"}
                        name={"Prev"}
                      />
                    </Col>
                    <Col xs={6}>
                      <Button
                        // onClick={() => handleClickNext("step_2")}
                        className="w-100 mt-4"
                        type={"submit"}
                        name={"Submit"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </form>
      </Container>
    </div>
  );
};

export default Home;
