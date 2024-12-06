import axios from 'axios';
import React, {useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'; 
import { Link } from 'react-router-dom';

const ProductDashComp= () => {
    const [product, setProduct] = useState([])


    
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData  = ()=>{
        axios.get("http://localhost:8888/products").then((response)=>{
            console.log(response.data);
            setProduct(response.data);
        }).catch((error)=>{});
    }

    const deleteProduct = (id)=> {
        // console.log(id);
        axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("product deleted successfully");
            fetchData();
        }).catch((error)=>{})
    }


    return (
        <div>
            <h2>This is Product Dash Component</h2>
    
            <Link to="/mainDashboard/productadd" className='btn btn-outline-success btn-ms mt-2 mb-2'>
            <AddIcon></AddIcon> Add
            </Link>
        

            <table className='table table-hover table-bordered table-striped text-center'>
                <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>company</th>
                    <th>Quatity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    product.length > 0 && product.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                            <td>
                                <Link to={`/mainDashboard/productedit/${val.id}`} className='btn btn-outline-success btn-sm'>
                                    <EditIcon></EditIcon>
                                </Link>
                                <button type='button' onClick={()=>deleteProduct(val.id)} 
                                className='btn btn-outline-danger btn-sm'>
                                    <DeleteIcon></DeleteIcon>
                                </button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashComp;
