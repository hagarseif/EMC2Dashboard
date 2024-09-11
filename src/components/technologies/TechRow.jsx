import { useState } from "react";
import {useDeleteTech} from './useDeleteTech'
import Modal from "../services/Modal";
import TechForm from "./TechForm";

function TechRow({tech}) {
    
    const [isOpenModal, setisOpenModal] = useState(false);
    const { isDeleting, mutate } = useDeleteTech();


  return (
    <>
      <tr className="border-top" key={tech.id}>
        <td>
          <span className="mb-0">{tech.arName}</span>
        </td>
        <td>
          <span className="mb-0">{tech.enName}</span>
        </td>
        <td>
          <span className="mb-0">{tech.techType}</span>
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
          <button className="btn btn-danger" color="danger">
            Delete
          </button>
        </td>
      </tr>
      {/* <tr className="border-top" key={p.id}>
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
            onClick={() => mutate(p.id)}
          >
            Delete
          </button>
        </td>
      </tr> */}
    <tr>
      <td>
        {isOpenModal && (
          <Modal onClose={() => setisOpenModal(false)}>
            <TechForm
              techToEdit={tech}
            />
          </Modal>
        )}
      </td>
    </tr>
  </>
  )
}

export default TechRow