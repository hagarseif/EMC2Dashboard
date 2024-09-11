import { useState } from "react";
import ServiceForm from "./ServiceForm";
import { useDeleteService } from "./useDeleteService.js";
import ModalService from "./ModalService.jsx";

function ServiceRow({ service }) {
  const { id, arName, enName } = service;
  const [isOpenModal, setisOpenModal] = useState(false);

  const { isDeleting, deleteService } = useDeleteService();
  return (
    <>
      <tr className="border-top">
        <td>
          <span className="mb-0">{arName}</span>
        </td>
        <td>
          <span className="mb-0">{enName}</span>
        </td>
        <td>
          {/* <img className="w-40" src={i.iconUrl} alt=""/> */}
          {/* <img className="w-50" src={`data:image/jpeg;charset=utf-8;base64,${i.icon}`} alt=""/> */}
        </td>
        <td>
          <button
            className="btn btn-primary"
            color="info"
            onClick={() => setisOpenModal(!isOpenModal)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            color="danger"
            disabled={isDeleting}
            onClick={() => deleteService(id)}
          >
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <td>
          {isOpenModal && (
            <ModalService onClose={() => setisOpenModal(false)}>
              <ServiceForm serviceToEdit={service} />
            </ModalService>
          )}
        </td>
      </tr>
    </>
  );
}

export default ServiceRow;
