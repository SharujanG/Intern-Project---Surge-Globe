import React, {useStae, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';





const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Name, email, password) {
  return { Name, email, password };
}



 function TableUser(props) {
  const classes = useStyles();
  const {users,onDelete} = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id} selectable={false}>
                <TableCell>{row._id}</TableCell>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.password}</TableCell>
              {/* <updateTable users={user} onUpdate={onUpdate}/> */}
              
            <TableCell>
                <TableRow>
                <button onClick={()=>onUpdate(user._id)}><EditIcon /></button>
                </TableRow>
                </TableCell>

                <TableCell>
                 <TableRow>
                  <button onClick={()=>onDelete(user._id)}><DeleteIcon/></button> 
                 </TableRow>
                </TableCell> 
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// function updateTable(props){
//   const{users,onUpdate} =props;

//   const [userName,setuserName]=useState(user.userName)

//   const handleChange = (event) =>{
//     setuserName (event.target.valuve)
//   }
//   return(
// <div> 
//   <td> 
//     <input text="String" valuve ="userName" onChange={(event) => handleChange(event)}></input>
//   </td>
//   <td>
//     <button onClick={() => onUpdate({_id: user._id,userName:userName})}>Update</button>
//   </td>
// </div>

//   )
// } 


// import React, {useStae} from 'react';

// function TableUser(props){
//     const {users} = props;

//     return (
//         <table>
//             <tr>
//                 <td>UserName</td>
//                 <td>Email</td>
//                 <td>password</td>
//             </tr>
//             {
//                 users.map(user => {
//                     return(
//                         <tr key = {user._id}>
//                             <td>{user.userName}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.password}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     )
// }

export default TableUser