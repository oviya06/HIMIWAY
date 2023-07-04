import * as React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled} from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#f9a925",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class Tables extends React.Component{

  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/getAllSignupDetails`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(sno, e){
    axios.delete(`http://localhost:8080/deleteSignupDetails/${sno}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.sno !== sno);
        this.setState({ posts });
      })

  }


render(){

  return (
    <div>
    <TableContainer component={Paper} style={{marginLeft:"100px",marginTop:"90px",width:"1050px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:"maroon"}}>EmailID</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"maroon"}} align="right">Username</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"maroon"}} align="right">Mobile no</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"maroon"}} align="right">Address</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"maroon"}} align="right">Delete</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"maroon"}} align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.posts.map((get) => (
            <StyledTableRow key={get.sno}>
              <StyledTableCell>{get.emailid}</StyledTableCell>
              <StyledTableCell align="right">{get.username}</StyledTableCell>
              <StyledTableCell align="right">{get.mobileno}</StyledTableCell>
              <StyledTableCell align="right">{get.address}</StyledTableCell>
              <StyledTableCell align="right"><ClearIcon onClick={(e) => this.deleteRow(get.sno, e)}/>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Link to={`/table/${get.sno}`}><EditNoteIcon/></Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
}

export default Tables;