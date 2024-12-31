import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const fetchProperties = async (setProperties) => {
    try {
        const response = await fetch('http://localhost:5000/api/properties', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        });
        const propertiesData = await response.json();
        // setProperties
        setProperties(propertiesData)
        console.log(propertiesData);
        return propertiesData;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

const CMS = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            const propertiesData = await fetchProperties(setProperties);
            setProperties(propertiesData);
        };

        getProperties();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-left mb-4">Properties</h1>
            <div className="flex justify-end">

            <Link to="/cms/create" className="hover:underline font-bold">
            <button className="mb-3 btn btn-primary">Create New Item</button>
                      </Link>
            </div>
            <Table striped bordered hover responsive className="table condensed-sm w-100">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!properties.length? (
                        <tr>
                            <td colSpan="6" className="text-center p-14">No data available</td>
                        </tr>
                    ) :
                    (properties.map((property, index) => (
                        <tr key={property._id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={property.image} alt="" className="w-14 h-14 rounded" />
                            </td>
                            <td>{property.name}</td>
                            <td>{property.description}</td>
                            <td>{property.price}</td>
                            <td>
                                {/* <Button variant="warning" className="mr-2">Edit</Button> */}
                                {/* <Button variant="danger">Delete</Button> */}
                            <Link to={`/cms/edit/${property._id}`} className="mr-2">
                                <Button variant="warning">Edit</Button>
                            </Link>
                            </td>
                        </tr>
                    )))
                }
                </tbody>
            </Table>
        </div>
    );
};

export default CMS;