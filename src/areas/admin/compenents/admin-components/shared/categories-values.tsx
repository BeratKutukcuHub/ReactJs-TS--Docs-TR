import { Category } from "../../../../../components/services/apis/category"
import { TableContainer, Table, TableHead, TableRow, TableBody, Paper, tableCellClasses, styled, TableCell } from '@mui/material';

interface CategoryItemProps {
    categoryprop : Category[]
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
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
export const CategoriesValues = ({categoryprop} : CategoryItemProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <TableContainer component={Paper} sx={{border:"none"}}>
      <Table sx={{ width:500}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Kategori Sihirbazı</StyledTableCell>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryprop.map((row,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className="d-flex justify-content-center align-items-center mt-2"><button className="btn btn-warning">Geri Dön</button></div>
    </TableContainer>
          
                </div>
            </div>
        </div>
    )
}