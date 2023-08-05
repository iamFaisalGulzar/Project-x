import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateProduct() {
  return (
    <div className="w-[50vw] mx-auto mt-[150px]">
        <h1 className="text-center mb-[15px]">Add New Product</h1>
    <Form className="w-[50vw] mx-auto border-2 border-gray-400 p-10 rounded-sm h-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile Price" />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sold Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter Sold Amount of Mobile " />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Description" />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Image Url" />
      </Form.Group>
      <div className="flex justify-center">
      <Button variant="primary" type="submit">
        Add Product
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default CreateProduct;
