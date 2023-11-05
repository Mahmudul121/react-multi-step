import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "../../components/ui/Button";

import { useLocation, useNavigate } from "react-router-dom";
import { toastify } from "../../components/ui/Toast";

// pdf
import ReactPDF, {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: "none",
  },
  bold: {
    fontWeight: "bold",
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "50%",
  },
  row2: {
    width: "50%",
  },
});

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    console.log(location.state);
    if (location.state?.data) {
      setResultData(location.state?.data);
    } else {
      toastify("error", "Please submit data first.");
      navigate("/");
    }
    // eslint-disable-next-line
  }, [location.state]);
  console.log(resultData, resultData?.length);
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
              <td>{resultData?.project_name ?? "-"}</td>
              <td>{resultData?.client ?? "-"}</td>
              <td>{resultData?.contractor ?? "-"}</td>
              <td>{resultData?.project_description ?? "-"}</td>
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
              <td>{resultData?.max_x ?? "-"}</td>
              <td>{resultData?.min_x ?? "-"}</td>
              <td>{resultData?.max_y ?? "-"}</td>
              <td>{resultData?.min_y ?? "-"}</td>
              <td>{resultData?.max_z ?? "-"}</td>
              <td>{resultData?.min_z ?? "-"}</td>
            </tr>
          </tbody>
        </Table>
        {/* pdf generator */}
        <div className="my-5 text-center">
          {resultData?.project_name ? (
            <PDFDownloadLink
              className="w-50 mt-4 btn btn-primary"
              document={
                <Document>
                  <Page size="A4" style={styles.page}>
                    <View style={styles.table}>
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>Project Name</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.project_name ?? "-"}
                        </Text>
                      </View>
                      {/* client */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>Client</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.client ?? "-"}
                        </Text>
                      </View>
                      {/* cc */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>Contractor</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.contractor ?? "-"}
                        </Text>
                      </View>
                      {/* description */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>Project Description</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.project_description ?? "-"}
                        </Text>
                      </View>
                      {/* x min */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MIN X</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.min_x ?? 0}
                        </Text>
                      </View>
                      {/* x max */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MAX X</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.max_x ?? 0}
                        </Text>
                      </View>
                      {/* y */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MIN Y</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.min_y ?? 0}
                        </Text>
                      </View>
                      {/* y max */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MAX Y</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.max_y ?? 0}
                        </Text>
                      </View>
                      {/* z */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MIN Z</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.min_z ?? 0}
                        </Text>
                      </View>
                      {/* z max */}
                      <View style={[styles.row, styles.bold, styles.header]}>
                        <Text style={styles.row1}>
                          <Text style={styles.bold}>MAX Z</Text>
                        </Text>
                        <Text style={styles.row1}>
                          {resultData?.max_z ?? 0}
                        </Text>
                      </View>
                    </View>
                  </Page>
                </Document>
              }
              fileName="report.pdf"
            >
              Download PDF
            </PDFDownloadLink>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Result;
