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
import { addProductTech,addIndustryech } from "./apiTechnology";
import toast from "react-hot-toast/headless";
import { useState } from "react";

function TechForm() {
  const { register, handleSubmit, reset } = useForm();
  // const [techType, setTechType] = useState("");

  // const checkType = (e) => {
  //   if (e.target.value === "industry") {
  //     setTechType("industry");
  //     console.log(techType);
  //   } else {
  //     setTechType("product");
  //   }
  // };

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate:techProduct } = useMutation({
    mutationFn: addProductTech,
    onSuccess: () => {
      toast.success("New Technology successfully added");
      queryClient.invalidateQueries({
        queryKey: ["tech"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const { mutate:techIndustry } = useMutation({
    mutationFn: addIndustryTech,
    onSuccess: () => {
      toast.success("New Technology successfully added");
      queryClient.invalidateQueries({
        queryKey: ["techIndustry"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  function onSubmit(data) {
    if(techType === "industry")
    techProduct(data);
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
                <option value="industry">Industry</option>
                <option value="product">Product</option>
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
