import React from 'react';
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {
    
    //console.log(props.currentUser)

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    })

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)
    
    const onSubmit = (data, e) =>{
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)

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
                        required:{value:true, message:"Campo requerido"}
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
                        required:{value:true, message:"Campo requerido"}
                    })
                }
            />

            <span className="btn-darger text-small">
                {errors?.username?.message}
            </span>
            <br/>
            <button>Edit User</button>
        </form>
     );
}
 
export default EditUserForm;