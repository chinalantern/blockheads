import React, { useState } from 'react'
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Typography,
  Paper,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
} from '../tables/Imports'
import Loader from '../loader/Loader'
import RowComponent from './RowComponent'
import { log } from '../../utils/Helpers'

const DataTable = ({ data, icons, fetchingData, fetchingIcons }) => {
  // TODO: Get the exchange website from props data to create link

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Count</TableCell>
              <TableCell align="right">Logo</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">24hr Trade Volume (USD)</TableCell>
              <TableCell align="right">1 Month Trade Volume (USD)</TableCell>
              <TableCell align="right">Total Assets Listed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!fetchingData &&
              !fetchingIcons &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rowData) => (
                  <RowComponent rowData={rowData} iconUrl="" />
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default DataTable
