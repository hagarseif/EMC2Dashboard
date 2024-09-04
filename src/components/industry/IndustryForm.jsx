import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label } from "reactstrap"

function IndustryForm() {
  return (
    <Col>
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <i className="bi bi-bell me-2 pe"> </i>
        Add new Industry
      </CardTitle>
      <CardBody>
        <Form >
          <FormGroup>
            <Label for="industryName">Industry name</Label>
            <Input
              id="industryName"
              name="name"
              placeholder="Add Industry name"
              type="text"
            //   onChange={(e) => onhandelName(e)}
            //   value={industry}
            />
            <Label for="tech">Technology</Label>

            {/* {techFields.map((field, i) => ( */}
              <Input
                // key={i}
                // id={i}
                name="descriptionLines"
                placeholder="Add Technology name"
                type="text"
                className="mt-2"
                // value={field.value}
                // ref={inputRef}
                // onMouseOut={onhandelTech}
              />
            {/* ))} */}
            <button
              className="btn mt-2 btn-primary"
              color="primary"
            //   onClick={addTech}
            >
              Add another tech
            </button>
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Add Icon</Label>
            <Input
              id="exampleFile"
              name="icon"
              type="file"
            //   onChange={(e) => onhandelIcon(e)}
            />
          </FormGroup>
          <Button className="btn mt-2 btn-primary" color="primary">
            Add
          </Button>
        </Form>
      </CardBody>
    </Card>
  </Col>
  )
}

export default IndustryForm