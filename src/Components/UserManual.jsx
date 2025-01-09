import React from 'react';

const UserManual = () => {
    return (
        <div className="container mt-5 p-4 bg-light rounded shadow">
            <h1 className="text-center mb-4">User Manual</h1>
            
            <section id="register" className="mb-4">
                <h3>1. Registering an Account</h3>
                <p>
                    - Click on the <strong>"Sign Up"</strong> button on the top-right corner of the homepage.<br />
                    - Fill out the registration form with your details, including your email and password.<br />
                    - Click <strong>"Submit"</strong> to create your account.
                </p>
            </section>
            
            <section id="add-property" className="mb-4">
                <h3>2. Adding a Property</h3>
                <p>
                    - Log in to your account.<br />
                    - Navigate to the <strong>CMS</strong> section.<br />
                    - Click on the <strong>"Add Property"</strong> button and fill out the form with property details.<br />
                    - Click <strong>"Save"</strong> to add the property.
                </p>
            </section>
            
            <section id="manage-properties" className="mb-4">
                <h3>3. Managing Properties</h3>
                <p>
                    - In the CMS, locate the property you want to manage.<br />
                    - Click <strong>"Edit"</strong> to update the property details or <strong>"Delete"</strong> to remove it.<br />
                    - Confirm the changes.
                </p>
            </section>

            <div className="text-center">
                <a href="/UserManual/UserManual.pdf" download className="btn btn-primary">
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default UserManual;
