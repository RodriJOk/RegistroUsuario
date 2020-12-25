import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

function App() {
  
  const userData =[
    {id:uuidv4(), name:"Pablo", username:"pablo_dev"},
    {id:uuidv4(), name:"Belen", username:"aguss_belu"},
    {id:uuidv4(), name:"Karen", username:"karen_sanchez"},
    {id:uuidv4(), name:"Santiago", username:"santi"}
  ]

  //state

  const [users, setUsers] = useState(userData)
  
  //Agregar Usuario 

  const agregarUsuario = (user) => {
      user.id = uuidv4()
      setUsers([
        ...users,
        user
      ]) 
  }

//Eliminar Usuario
const deleteUser = (id)=>{

  const arrayFiltrado = users.filter(user => user.id !== id)
  
  setUsers(arrayFiltrado);
}

//Editar Usuario

const [editing, setEditing] = useState(false)

const [currentUser, setCurrentUser]= useState({
  id:null, 
  name:"", 
  username:""
})

//Editar Usuario

const editRow = (user)=>{
  setEditing(true)
  setCurrentUser({
    id:user.id, 
    name: user.name, 
    username: user.username
  })
}

//Actualizar Usuario

const updateUser = (id, updateUser)=>{
  setEditing(false)
  setUsers(users.map(user =>user.id === id ? updateUser:user))
}

  return (
    <div className="container">
      <h1>Registro de usuarios. </h1>
      <div className="flex-row">
        <div className="flex-large">
          
          {
            editing ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}>
              </EditUserForm> 
            </div>
            ):(
              <div>
                <h2>Agregar usuario</h2>
                <AddUserForm agregarUsuario={agregarUsuario}></AddUserForm>
              </div>
            )
          }
  
        </div>
        <div className="flex-large">
          <h2>Vista de usuarios</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
            ></UserTable>

        </div>
      </div>
    </div>
  );
}

export default App;
