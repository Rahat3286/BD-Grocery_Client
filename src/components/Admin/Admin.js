import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
        .then(res => console.log('server side response'))
    }

    return (
        <div className="container">
            <form className="" action="" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control col-md-5" name="title" defaultValue="" ref={register} />
                <br />
                <input className="form-control col-md-5" name="description" defaultValue="" ref={register} />
                <br />
                <input className="form-control col-md-5" name="price" defaultValue="" ref={register} />
                <br />
                <input className="form-control col-md-5" name="weight" defaultValue="" ref={register} />
                <br />
                <input className="form-control col-md-5" name="key" defaultValue="" ref={register} />
                <br />
                <input className="form-control col-md-5" name="imgUrl" type="file" onChange={handleImageUpload} />
                <br />
                <button className="btn btn-success" type="submit">Save</button>
            </form>
        </div>
    );
};

export default Admin;




// working code
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


























// first code



{/* <form action="">
    <p><span>Name: </span><input type="text" /></p>
    <p><span>Price: </span><input type="text" /></p>
    <p><span>Quantity: </span><input type="text" /></p>
    <p><span>Product Image: </span><input type="file" /></p>
    <button className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
</form> */}










// second code

// const { register, handleSubmit, watch, erros } = useForm();
// const [imageURL, setIMageURL] = useState(null);

// const onSubmit = data => {
//     const eventData = {
//         name: data.name,
//         imageURL: imageURL
//     }
//     console.log(data)
// };

// const handleImageUpload = event => {
//     console.log(event.target.files[0]);
//     const imageData = new FormData();
//     imageData.set('key', '32dbb43d356182fea99f3eb509f510cb');
//     imageData.append('image', event.target.files[0]);

//     axios.post('https://api.imgbb.com/1/upload', imageData)
//         .then(function (response) {
//             setIMageURL(response.data.data.display_url);
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }












{/* <form onSubmit={handleSubmit(onSubmit)}>
    <input name="name" defaultValue="New exciting Event" ref={register} />
    <br />
    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
    <br />
    <input className="btn btn-primary" type="submit" />
</form> */}