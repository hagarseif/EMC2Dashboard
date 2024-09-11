import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { addIndustry } from "./apiIndustry";

function IndustryForm() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: addIndustry,
    onSuccess: () => {
      toast.success("New Industry successfully added");
      queryClient.invalidateQueries({
        queryKey: ["industry"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  function onSubmit(data) {
    mutate(data);
  }
  return (
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2 pe"> </i>
          Add new Industry
        </CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="arIndustryName">Ar Industry name</Label>
              <input
                id="arIndustryName"
                name="name"
                placeholder="Add Industry name"
                type="text"
                {...register("arName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="enIndustryName">En Industry name</Label>
              <input
                id="enIndustryName"
                name="name"
                placeholder="Add Industry name"
                type="text"
                {...register("enName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tech">Technology Type</Label>
              <select
                id="tech"
                name="techType"
                placeholder="Add Technology type"
                className="mt-2"
              >

              </select>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Add Icon</Label>
              <input id="exampleFile" name="icon" type="file" {...register("iconImage")}/>
            </FormGroup>
            <Button
              className="btn mt-2 btn-primary"
              color="primary"
              disabled={isCreating}
            >
              Add
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

export default IndustryForm;
