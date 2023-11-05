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
import { toastify } from "../../components/ui/Toast";
// react router
import { useNavigate } from "react-router-dom";
import ChartView from "../../components/ui/ChartView";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("step_1");
  const [csvData, setCSVData] = useState([]);
  const allowedExtensions = ["csv"];
  // react hook form
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  // active tab
  const handleClickNext = (type) => {
    setActiveTab(type);
  };
  // form submit
  const onSubmit = (data) => {
    console.log(data);
    navigate("/result", { state: { data: data } });
  };
  // error on submit
  const onError = (e) => {
    if (
      e?.project_name ||
      e?.project_description ||
      e?.client ||
      e?.contractor
    ) {
      toastify("warn", "Please fill step 1 data.");
      setActiveTab("step_1");
    }
  };

  // read csv file
  const uploadCSV = async (e) => {
    if (e.target.files) {
      try {
        const file = e.target.files[0];

        const fileExtension = file?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
          toastify("error", "Please input a csv file");
          return;
        }

        // 1. create url from the file
        const fileUrl = URL.createObjectURL(file);

        // 2. use fetch API to read the file
        const response = await fetch(fileUrl);

        // 3. get the text from the response
        const text = await response.text();

        // 4. split the text by newline
        const lines = text.split("\n");

        // 5. map through all the lines and split each line by comma.
        const _data = lines.map((line) => line.split(","));

        // 6. call the onChange event
        toastify("success", "File upload succesfully");
        const getXValues = _data
          .slice(1, _data.length - 1)
          .map((row) => parseFloat(row[1]));
        // console.log();
        // x value
        const minX = Math.min(...getXValues);
        const maxX = Math.max(...getXValues);
        // y value
        const getYValues = _data
          .slice(1, _data.length - 1)
          .map((row) => parseFloat(row[2]));
        const minY = Math.min(...getYValues);
        const maxY = Math.max(...getYValues);
        // z value
        const getZValues = _data
          .slice(1, _data.length - 1)
          .map((row) => parseFloat(row[3]));
        const minZ = Math.min(...getZValues);
        const maxZ = Math.max(...getZValues);
        // merge array
        // Combine the two arrays
        const mergedArray = _data.slice(1, _data.length - 1).map((row) => {
          return {
            x: parseFloat(row[1]),
            y: parseFloat(row[2]),
          };
        });

        // Set the combinedArray using the state updater function
        setCSVData(mergedArray);
        // set VALUE
        setValue("min_x", minX);
        setValue("max_x", maxX);
        setValue("min_y", minY);
        setValue("max_y", maxY);
        setValue("min_z", minZ);
        setValue("max_z", maxZ);
      } catch (error) {
        toastify("error", error);
        console.error(error);
      }
    }
  };
  // console.log(csvData);
  return (
    <div className="app-layout">
      <Container className="home-wrapper multi-step-block">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                        placeholder=""
                        // placeholder="Enter project name"
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
                        placeholder=""
                        // placeholder="Enter client name"
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
                        placeholder=""
                        // placeholder="Enter contractor name"
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
                        placeholder=""
                        // placeholder="Enter description"
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
                        <td>{getValues("project_name") ?? "-"}</td>
                        <td>{getValues("client") ?? "-"}</td>
                        <td>{getValues("contractor") ?? "-"}</td>
                        <td>{getValues("project_description") ?? "-"}</td>
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
                    <Form.Control
                      type="file"
                      accept=".csv"
                      onChange={(e) => uploadCSV(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  {csvData?.length > 0 ? <ChartView data={csvData} /> : null}
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
                        placeholder=""
                        // placeholder="Enter MAX X"
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
                        placeholder=""
                        // placeholder="Enter MIN X"
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
                        placeholder=""
                        // placeholder="Enter MAX Y"
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
                        placeholder=""
                        // placeholder="Enter MIN Y"
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
                        placeholder=""
                        // placeholder="Enter MAX Z"
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
                        placeholder=""
                        // placeholder="Enter MIN Z"
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
