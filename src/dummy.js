import React , {useState , useEffect , useContext} from 'react'
import "./register.css"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from 'react-bootstrap/Button';
import Select from "react-select";
import Spiner from "../../components/Spiner/Spiner"
import { ToastContainer, toast } from "react-toastify"
import {useNavigate} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


// import Select from "react-bootstrap/Select"

const Register = () => {

    const [inputdata, setInputData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        gender: "",
        location: ""
      });

    const [status, setStatus] = useState("Active");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [showspin, setShowSpin] = useState(true);

    const navigate = useNavigate();



    // status optios
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

   // setInput Value
   const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

   // status set
   const setStatusValue = (e) => {
    setStatus(e.value)
  }

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }


  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }

    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [image])

  return (
    <>
        <div className='container'>

            <h2 className='text-center mt-1'>Register Your Details</h2>
            <Card>
                <div className="profile_div text-center">
                    <img src="/man.png" alt="img" />
                </div>

                <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" name='fname' placeholder='Enter FirstName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" n ame='lname' placeholder='Enter LastName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email'  placeholder='Enter Email' />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name='mobile'  placeholder='Enter Mobile' />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  <Select options={options} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-center" />


        </div>
    </>
  )
}

export default Register