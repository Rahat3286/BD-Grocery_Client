import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '32dbb43d356182fea99f3eb509f510cb');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = data => {
        const productData = {
            title: data.title,
            description: data.description,
            weight: data.weight,
            imgUrl: imgURL,
            price: data.price,
            key: data.key
        }
        console.log(data)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Product has been added successfully')
                }
            })

    }

    return (
        <div className="container">
            <div className="text-center mb-5" style={{
                color: 'rgb(62, 45, 116)', fontWeight:'bold',fontSize:'35px' }}><p>Admin</p></div>
            <div className=" d-flex justify-content-center text-center">
                <form className="" action="" onSubmit={handleSubmit(onSubmit)}>
                    <label className="col-form-label"><b>Product Name :</b></label>
                    <input className="form-control " name="title" placeholder="Enter product name" defaultValue="" ref={register({ required: true })} />
                    {errors.title && <span className="error">Name is required</span>}
                    <br />
                    <label className="col-form-label"><b>Product Description :</b></label>
                    <input className="form-control" name="description" placeholder="Enter product Description" defaultValue="" ref={register({ required: true })} />
                    {errors.description && <span className="error">Description is required</span>}
                    <br />
                    <label className="col-form-label"><b>Product Price :</b></label>
                    <input className="form-control" name="price" placeholder="Enter product price" defaultValue="" ref={register({ required: true })} />
                    {errors.price && <span className="error">Price is required</span>}
                    <br />
                    <label className="col-form-label"><b>Product Weight :</b></label>
                    <input className="form-control" name="weight" placeholder="Enter product weight" defaultValue="" ref={register({ required: true })} />
                    {errors.weight && <span className="error">Weight is required</span>}
                    <br />
                    <label className="col-form-label"><b>Product No :</b></label>
                    <input className="form-control" name="key" defaultValue="" placeholder="Enter product No." ref={register({ required: true })} />
                    {errors.key && <span className="error">**Product No. is required to show your products on UI**</span>}
                    <br />
                    <label className="col-form-label"><b>Upload Product Image :</b></label>
                    <input className="form-control" name="imgUrl" placeholder="Upload Image" type="file" onChange={handleImageUpload} />
                    {errors.imgUrl && <span className="error">Image is required</span>}
                    <br />
                    <button className="btn btn-success" type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;



// working code
{/* <form className="" action="" onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control " name="title" defaultValue="" ref={register({ required: true })} />
    {errors.title && <span className="error">Title is required</span>}
    <input className="form-control" name="description" defaultValue="" ref={register({ required: true })} />
    {errors.description && <span className="error">Description is required</span>}
    <input className="form-control" name="price" defaultValue="" ref={register({ required: true })} />
    {errors.price && <span className="error">Price is required</span>}
    <input className="form-control" name="weight" defaultValue="" ref={register({ required: true })} />
    {errors.weight && <span className="error">Product Weight is required</span>}
    <input className="form-control" name="key" defaultValue="" ref={register({ required: true })} />
    {errors.key && <span className="error">Product No. is required to show your products on UI</span>}
    <input className="form-control" name="imgUrl" type="file" onChange={handleImageUpload} />
    {errors.imgUrl && <span className="error">Image is required</span>}
    <button className="btn btn-success" type="submit">Save</button>
</form> */}


























// design 1
{/* <div className="row mb-5 justify-content-center">
                <div className="col-md-5">
                    <form action="">
                        <label for="" className="col-form-label"><b>Product Name</b></label>
                        <input className="form-control" type="text" placeholder="Enter Name" name="title" aria-label="default input example" />
                    </form>
                </div>
                <div className="col-md-5">
                    <form action="/addProduct">
                        <label for="" className="col-form-label"><b>Weight</b></label>
                        <input className="form-control" type="text" placeholder="Enter weight with Unit" name="weight" aria-label="default input example" />
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Add Price($)</b></label>
                    <input className="form-control " type="text" placeholder="Enter Price" 
                    name="price"  aria-label="default input example" />
                </div>
                <div className="col-md-5">
                    <label for="" className="col-form-label"><b>Upload Image</b></label>
                    <input className="form-control" type="file"  placeholder="Upload Image" 
                    name="imgUrl" aria-label="default input example" />
                </div>
            </div>
            <div className="container text-right">
                <button className="btn btn-success" onClick={handleAddProduct}>Save</button>
            </div> */}
