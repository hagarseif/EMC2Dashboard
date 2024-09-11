import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";
import Loader from "../../layouts/loader/Loader";
import { useTech } from "./useTech";

import TechRow from "./TechRow";

function TechTabel() {

  const { isLoading, techIndustry, techProduct } = useTech();
  const allTech=[...techIndustry,...techProduct]
  

  if (isLoading) return <Loader />;
  return (
    <Row>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Technologies we offer</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Ar Technology name</th>
                    <th>En Technology name</th>
                    <th>Technology For..</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 {allTech.map(tech=> <TechRow tech={tech} key={tech.id}/>)}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default TechTabel;
