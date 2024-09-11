import { useForm } from "react-hook-form";
import {
  Card,
  Form,
  CardTitle,
  Col,
  CardBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { useCreateService } from "./useCreateService";
import { useUpdateService } from "./useUpdateService";

function ServiceForm({ serviceToEdit = {} }) {
  const {isCreating, createService } = useCreateService();
  const {isUpdating,updateServices} = useUpdateService();
  const isWorking = isCreating || isUpdating;
  

  const { id: editId, ...editValues } = serviceToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  

 
  function onSubmit(data) {
    const formData = new FormData();
    formData.append("enName", data.enName);
    formData.append("arName", data.arName);
    formData.append("iconUrl", data.iconUrl);
    if (isEditSession) updateServices({ newService: {...data,id:editId}, id: editId });
    else createService(formData,{
      onSuccess: () => {
        reset();
      }
    });
    // console.log(editId,data);
  }



  return (
    <Col>
      <Card className={isEditSession?"edit-card":"card"}>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          {isEditSession ? "Edit Service" : "Add new Service"}
        </CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="serviceArName">Service Ar name</Label>
              <input
                id="serviceArName"
                name="name"
                placeholder="Add Arabic Service name"
                type="text"
                {...register("arName", { required: "This field is required*" })}
                disabled={isWorking}
              />
              {errors?.ArName?.message && (
                <span className="error">{errors.ArName.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="serviceEnName">Service En name</Label>
              <input
                id="serviceEnName"
                name="name"
                placeholder="Add English Service name"
                type="text"
                {...register("enName", { required: "This field is required*" })}
                disabled={isCreating}
              />
              {errors?.EnName?.message && (
                <span className="error">{errors.EnName.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Add Icon</Label>
              <input
                id="exampleFile"
                name="icon"
                type="file"
                {...register("iconUrl", {
                  required: isEditSession ? false : "This field is required*",
                })}
                disabled={isWorking}
              />
              {errors?.IconUrl?.message && (
                <span className="error">{errors.IconUrl.message}</span>
              )}
            </FormGroup>
            <Button className="btn mt-2" color="primary" disabled={isWorking}>
              {isEditSession ? "Edit service" : "Add"}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

export default ServiceForm;
