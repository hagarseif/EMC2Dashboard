import { Row } from "reactstrap";
import ServiceForm from "../components/services/ServiceForm"
import ServiceTabel from "../components/services/ServiceTabel"
function Services() {
  return (
    <Row>
      <ServiceForm />
      <ServiceTabel />
    </Row>
  );
}

export default Services;
