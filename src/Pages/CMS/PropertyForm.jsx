import React from 'react';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      image: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <div className="container-fluid bg-light min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-primary text-white p-4">
                  <h3 className="mb-0 text-center fw-bold">Add New Product</h3>
                </div>
                <div className="card-body p-5">
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold text-muted">Product Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-0 bg-light"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                        placeholder="Enter product name"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="description" className="form-label fw-bold text-muted">Description</label>
                      <textarea
                        className="form-control form-control-lg border-0 bg-light"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required
                        rows="4"
                        placeholder="Describe your product"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="price" className="form-label fw-bold text-muted">Price</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-0 bg-light">$</span>
                        <input
                          type="text"
                          className="form-control form-control-lg border-0 bg-light"
                          id="price"
                          name="price"
                          value={this.state.price}
                          onChange={this.handleInputChange}
                          required
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="image" className="form-label fw-bold text-muted">Image URL</label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-0 bg-light"
                        id="image"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        required
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div className="d-grid mt-5">
                      <button type="submit" className="btn btn-primary btn-lg py-3 fw-bold text-uppercase">
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;

