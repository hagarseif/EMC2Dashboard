import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { addTech } from "./apiTechnology";
import toast from "react-hot-toast/headless";

function TechForm() {
  const {register,handleSubmit,reset}= useForm();

  const queryClient=useQueryClient()
  const {isLoading:isCreating,mutate}=useMutation({
    mutationFn:addTech,
    onSuccess:()=>{
      toast.success("New Technology successfully added")
      queryClient.invalidateQueries({
        queryKey:['tech']
      })
      reset()
    },
    onError:(err)=>toast.error(err.message)

  })
  function onSubmit(data){
    mutate(data)
    
  }
  return (
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Add new Technology
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="techeOption">Technology For?</Label>
              <select
                id="techeOption"
                name="techeOption"
                type="select"
                {...register("techType")}
              >
                <option value="" disabled selected>
                  Please select an option
                </option>
                <option>Industry</option>
                <option>Product</option>
              </select>
            </FormGroup>
            <Button className="btn mt-2" color="primary" disabled={isCreating}>
              Add
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

export default TechForm;
