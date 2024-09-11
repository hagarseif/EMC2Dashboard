import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
function clientForm() {
  return (
    <Col>
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <i className="bi bi-bell me-2"> </i>
        Add new Client
      </CardTitle>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="clientarName">Client Arabic name</Label>
            <input
              id="clientarName"
              name="client"
              placeholder="Add Client Ar name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="clientenName">Client English name</Label>
            <input
              id="clientenName"
              name="client"
              placeholder="Add Client En name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Add Logo</Label>
            <input id="exampleFile" name="file" type="file" />
          </FormGroup>
          <Button className="btn mt-2" color="primary">
            Add
          </Button>
        </Form>
      </CardBody>
    </Card>
  </Col>
  )
}

export default clientForm