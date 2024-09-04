import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";
import { deleteIndustry, GetAllIndustries } from "./apiIndustry";
import Loader from "../../layouts/loader/Loader";
import toast from "react-hot-toast";

function IndustryTabel() {
  ///////////////////for retrieve
  const { isLoading, data: industry } = useQuery({
    queryKey: ["industry"],
    queryFn: GetAllIndustries,
  });

  ///////////////for deleting
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteIndustry,
    onSuccess: () => {
      toast.success("Industry deleted successfully")
      queryClient.invalidateQueries({
        queryKey: ["industry"],
      });
    },
    onError:(err)=>toast.error(err.message)
  });

  if (isLoading) return <Loader />;
  return (
    <Row>
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Industries We Serve</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Industry ArName</th>
                    <th>Industry EnName</th>
                    <th>Industry Icon</th>
                    <th>Technologies</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.map((i) => (
                    <tr key={i.id} className="border-top">
                      <td>
                        <span className="mb-0">{i.arName}</span>
                      </td>
                      <td>
                        <span className="mb-0">{i.enName}</span>
                      </td>
                      {/* <td>
                          {i.technologies.$values.map((d, i) => (
                            <span key={i}> {`${d} `} </span>
                          ))}
                        </td> */}
                      <td>
                        {/* <img
                            className="w-40"
                            src={`data:image/svg+xml;base64,${tdata.icon}`}
                            alt=""
                          />
                          <img
                            className="w-50"
                            src={`data:image/jpeg;charset=utf-8;base64,${tdata.icon}`}
                            alt=""
                          /> */}
                      </td>

                      <td>
                        <button className="btn btn-primary" color="info">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          color="danger"
                          disabled={isDeleting}
                          onClick={() => mutate(i.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default IndustryTabel;
