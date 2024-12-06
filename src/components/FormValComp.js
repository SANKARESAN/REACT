import React, {useState} from 'react'

const FormValComp =()=>{
    const [user,setUser] = useState({
        fname:'',
        term:false
    });

    const changeInput = (event) =>{
    //     console.log(event.target.type);
    //     console.log(event.target.type);
    //     console.log(event.target.type);
    const {type,name,value,checked} = event.target;
    setUser({...user,[name]:type==="checkbox" ? checked : value});
    }

    const checkData = (event) => {
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }

        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fullname must contain only character min-3 and min-20");
            return false;
        }
        if(user.term ===false){
            window.alert("Please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }

    return (
        <div>
            <h2>This is Form Validation Component</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter your FirstName:</label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
                </div>

                <div>
                    <input type='checkbox' name='term' onChange={changeInput} value={user.term}/>Accept terms and conditions
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp;
