import { Row } from "reactstrap"
import ClientForm from "../components/clients/ClientForm"
import ClientTabel from "../components/clients/ClientTabel"
function Clients() {
  return (
    <Row>
        <ClientForm/>
        <ClientTabel/>
    </Row>
  )
}

export default Clients