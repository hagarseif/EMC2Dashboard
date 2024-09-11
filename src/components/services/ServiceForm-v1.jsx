import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Card ,Form, CardTitle, Col,CardBody, FormGroup, Label, Button } from "reactstrap";
import {addService} from './apiServices'
function ServiceForm() {
  const { register, handleSubmit, reset,formState } = useForm();
  const {errors}=formState

  /////////////////pots Service////////////////////
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: addService,
    onSuccess: () => {
      toast.success("New Service successfully added");
      queryClient.invalidateQueries({
        queryKey: ["service"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  function onSubmit(data) {
    const formData=new FormData()
    formData.append('enName',data.EnName)
    formData.append('arName',data.ArName)
    formData.append('iconUrl',data.IconUrl)
    mutate(formData);
    // console.log(formData);
    
  }

 

  return (
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Add new Service
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
                {...register("ArName",{required:"This field is required*"})}
                disabled={isCreating}
                
              />
              {errors?.ArName?.message && <span className="error">{errors.ArName.message}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="serviceEnName">Service En name</Label>
              <input
                id="serviceEnName"
                name="name"
                placeholder="Add English Service name"
                type="text"
                {...register("EnName",{required:"This field is required*"})}
                disabled={isCreating}
              />
              {errors?.EnName?.message && <span className="error">{errors.EnName.message}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Add Icon</Label>
              <input
                id="exampleFile"
                name="icon"
                type="file"
                {...register("IconUrl",{required:"This field is required*"})}
                disabled={isCreating}
              />
              {errors?.IconUrl?.message && <span className="error">{errors.IconUrl.message}</span>}
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

export default ServiceForm;
