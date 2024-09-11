import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";
import { deleteTech, GetIndustryTech, GetProductTech } from "./apiTechnology";
import Loader from "../../layouts/loader/Loader";
import toast from "react-hot-toast";
function TechTabel() {
  ///////////////for getting data
  const { isLoading, data: techProduct } = useQuery({
    queryKey: ["tech"],
    queryFn: GetProductTech,
  });
  const { data: techIndustry } = useQuery({
    queryKey: ["techIndustry"],
    queryFn: GetIndustryTech,
  });

  ///////////////for deleting
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteTech,
    onSuccess: () => {
      toast.success("Technology deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["tech"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Loader />;
  return (
    <Row>
      <Col lg="12">
        <div className="table-card">
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Technologies we offer</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Ar Technology name</th>
                    <th>En Technology name</th>
                    <th>Technology For..</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {techIndustry.map((t) => (
                    <tr className="border-top" key={t.id}>
                      <td>
                        <span className="mb-0">{t.arName}</span>
                      </td>
                      <td>
                        <span className="mb-0">{t.enName}</span>
                      </td>
                      <td>
                        <span className="mb-0">{t.techType}</span>
                      </td>
                      <td>
                        <button className="btn btn-primary" color="info">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger" color="danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {techProduct.map((p) => (
                    <tr className="border-top" key={p.id}>
                      <td>
                        <span className="mb-0">{p.arName}</span>
                      </td>
                      <td>
                        <span className="mb-0">{p.enName}</span>
                      </td>
                      <td>
                        <span className="mb-0">{p.techType}</span>
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
                          onClick={() => mutate(p.id)}
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

export default TechTabel;
