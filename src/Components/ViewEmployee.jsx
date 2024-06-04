import React, { useEffect, useState } from 'react'
import { getEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ViewEmployee = () => {
    const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");


    useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              const response = await getEmployee(id);
              console.log(response.data);
              setFirstname(response.data.firstname);
              setLastname(response.data.lastname);
              setEmail(response.data.email);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [id]);
  return (

    <div className="container">
    <div className="row">
      <div className="card-col-md-6 offser-md-3">
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Firstname</label>
              <span>{firstname}</span>
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Lastname</label>
              <span>{lastname}</span>
            </div>
            <div className="form-group mb-2">
              <label className="form-label">EmailAdress</label>
              <span>{email}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default ViewEmployee
