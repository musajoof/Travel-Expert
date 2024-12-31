import React, { useState } from "react";
import {Form, InputGroup, Card, Alert, Button} from "react-bootstrap";

const ProductForm = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    property_type: "",
    image: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileUpload =  (event) => {
  //   // const formData = new FormData();
  //   formData.append("image", event.target.files[0]);

   
  // };

  // const handleFileUpload = async (file) => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   const response = await fetch("http://localhost:5000/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to upload image");
  //   }

  //   const data = await response.json();
  //   return data.filePath; // Assuming the server returns the file path
  // };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
    // console.log(formData.image)
  };

  const [alert, setAlert] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch(
        "http://localhost:5000/api/properties/create",
        {
          method: "POST",
          body: formDataToSend,
          // 'Content-Type':'application/json'
        }
      );

      if (!response.ok) {
        throw new Error("Failed to signup");
      }

      // Reset error and simulate success
      setError("");
      console.log("property created");
      setAlert("Property created successfully!");
      setFormData({
        name: "",
        description: "",
        location: "",
        property_type: "",
        price: "",
        image: "",
      });
    } catch (error) {
      setError(error.message);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          {alert ? (
            <Alert variant="success" onClose={() => setAlert("")} dismissible>
              <Alert.Heading>Great!</Alert.Heading>
              <p>{alert}</p>
            </Alert>
          ) : (
            ""
          )}
          {error && (
            <Alert variant="danger" onClose={() => setError("")} dismissible>
              {error}
            </Alert>
          )}
          <div className="col-lg-8">
            <Card className="border-0 shadow-lg">
              <Card.Header className="bg-gray text-black p-3">
                <h3 className="mb-0 text-center fw-bold">Add New Product</h3>
              </Card.Header>
              <Card.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted">
                      Product Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter product name"
                      className="form-control-lg border-0 bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted">
                      Description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="Describe your product"
                      className="form-control-lg border-0 bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted">
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="Location"
                      className="form-control-lg border-0 bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted">Price</Form.Label>
                    <InputGroup className="input-group-lg">
                      <InputGroup.Text className="border-0 bg-light">$</InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        placeholder="0.00"
                        className="form-control-lg border-0 bg-light"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted">
                      Property Type
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={formData.property_type}
                      onChange={handleInputChange}
                      name="property_type"
                      className="custom-select form-control"
                    >
                      <option value="">Select one</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Residence">Residence</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-4">
                    <Form.Label className="fw-bold text-muted">
                      Default file input example
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      onChange={handleFileUpload}
                      required
                      className="form-control-lg border-1 bg-light"
                    />
                  </Form.Group>
                  <div className="d-grid mt-5">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg py-3 fw-bold text-uppercase"
                    >
                      Add Product
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
