import React from 'react';
import { Table, Button } from 'react-bootstrap';

const CMS = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-left text-lg mb-4">Properties</h1>
            {/* <Button variant="primary" className="mb-3">Create New Item</Button> */}
            <Table striped bordered hover responsive className="table-sm table w-full m -6">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row */}
                    <tr>
                        <td>1</td>
                        <td>Sample Item</td>
                        <td>This is a sample item description.</td>
                        <td>$10.00</td>
                        <td>
                            <Button variant="warning" className="mr-2">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default CMS;