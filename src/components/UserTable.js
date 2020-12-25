const UserTable = (props) => {
    
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nombre de usuario</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                props.users.length > 0 ?
                props.users.map(users =>(
                    <tr key={users.id}>
                    <td>{users.name}</td>
                    <td>{users.username}</td>
                    <td>
                        <button 
                            className="button muted-button" 
                            onClick={()=> props.editRow(users)}
                            >
                            Editar
                        </button>
                        
                        <button 
                            className="button muted-button" 
                            onClick={()=> props.deleteUser(users.id)}
                            >
                            Eliminar
                        </button>
                    </td>
                </tr>
                )) : (
                    <tr>
                        <td colSpan={3}>No hay registros de usuarios</td>
                    </tr>
                )
                }
                
            </tbody>
        </table>
     );
}
 
export default UserTable;