import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";

import Loader from "../../layouts/loader/Loader";
import ServiceRow from "./ServiceRow.jsx";
import { useService } from "./useService.js";

function ServiceTabel() {
   const  {isLoading, service}=useService();
  

 //////////if loading///////////////
 if(isLoading) return <Loader/>

  return (
    <Row>
      <Col lg="12">
        <div>
          <Card >
            <CardBody>
              <CardTitle tag="h5"> Services we offer</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Service Ar name</th>
                    <th>Service En name</th>
                    <th>Service Icon</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {service.map((i) => (
                    <ServiceRow service={i} key={i.id}/>
                   ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default ServiceTabel;
