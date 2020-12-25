import React from 'react';
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {
    
    
    const {register, errors, handleSubmit} = useForm()
    
    const onSubmit = (data, e) =>{
        console.log(data)

        props.agregarUsuario(data)

        e.target.reset()
    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input 
                type="text"     
                name="name" 
                ref={
                    register({
                        required:{value:true, message:"Campo requerido. Por favor complete este campo"}
                    })
                }
            />
        
            <span className="btn-darger text-small">
                {errors?.name?.message}
            </span>
        
        
            <label>Usuario</label>
            <input 
                type="text" 
                name="username"
                ref={
                    register({
                        required:{value:true, message:"Campo requerido. Por favor complete este campo"}
                    })
                }
            />

            <span className="btn-darger text-small">
                {errors?.username?.message}
            </span>
            <br/>
            <button>Añadir nuevo usuario</button>
        </form>
     );
}
 
export default AddUserForm;