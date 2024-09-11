import { useForm } from "react-hook-form";
import {
  Card,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap"; 
import { useCreateTech } from "./useCreateTech";
import useUpdateTech from "./useUpdateTech";

function TechForm({ techToEdit = {} }) {
  
  const { id: editId, ...editValues } = techToEdit;
  const isEditSession = Boolean(editId);
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { isCreating, techIndustry, techProduct } = useCreateTech();
  const {isUpdating,updateTech} =useUpdateTech()

  
  const isWorking = isCreating || isUpdating;


  function onSubmit(data) {
    if (isEditSession)
      updateTech({ newTech:{ ...data,id:editId}, id: editId });
    else {
      if (data.techType === "industry")
        techIndustry(data, {
          onSuccess: () => {
            reset();
          },
        });
      else
        techProduct(data, {
          onSuccess: () => {
            reset();
          },
        });
    }
  }
  return (
    <Col>
      <Card className={isEditSession?"edit-card":"card"}>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
         {isEditSession?"Update Technology": "Add new Technology"}
        </CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="techeName">Arabin Tech name</Label>
              <input
                id="techeName"
                name="techeName"
                placeholder="Add Technology name"
                type="text"
                {...register("arName")}
                disabled={isWorking}
              />
            </FormGroup>
            <FormGroup>
              <Label for="techeName">English Tech name</Label>
              <input
                id="techeName"
                name="techeName"
                placeholder="Add Technology name"
                type="text"
                {...register("enName")}
                disabled={isWorking}
              />
            </FormGroup>
            <FormGroup>
              <Label for="techeOption">Technology For?</Label>
              <select
                id="techeOption"
                name="techeOption"
                type="select"
                {...register("techType")}
                disabled={isWorking}
              >
                <option value="" disabled selected>
                  Please select an option
                </option>
                <option value="industry">Industry</option>
                <option value="product">Product</option>
              </select>
            </FormGroup>
            <Button className="btn mt-2" color="primary" disabled={isCreating}>
              {isEditSession?"Edit Tech" : "Add"}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

export default TechForm;
