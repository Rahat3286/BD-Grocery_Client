import React from 'react';

const Admin = () => {
    return (
        <div className="container">
            <div className="row mb-5 justify-content-center">
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Product Name</b></label>
                    <input className="form-control" type="text" placeholder="Enter Name" aria-label="default input example" />
                </div>
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Weight</b></label>
                    <input className="form-control" type="text" placeholder="Enter weight with Unit" aria-label="default input example" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Add Price</b></label>
                    <input className="form-control " type="text" placeholder="Enter Price" aria-label="default input example" />
                </div>
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Product Name</b></label>
                    <input className="form-control" type="file" placeholder="Enter weight with Unit" aria-label="default input example" />
                </div>
            </div>
            <div className="container text-right">
                <button className="btn btn-success">Save</button>
            </div>
        </div>
    );
};

export default Admin;



// <div className="container">
        //     <h3 style={{color:'rgb(55,55,55)'}} className="mb-5">Add Product</h3>
        //     <div className="row">
        //         <div className="col-md-5 mb-5 ml-2 border-bottom"><b>Product Name</b></div>
        //         <div className="col-md-5 mb-5 ml-2 border-bottom"><b>Weight</b></div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-5 ml-2 border-bottom"><b>Add Price</b></div>
        //         <div className="col-md-5 ml-2 border-bottom"><b>Add Photo</b></div>
        //     </div>
        // </div>