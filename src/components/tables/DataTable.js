import React from 'react'
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
import RowComponent from './RowComponent'
import { log } from '../../utils/Helpers'

const DataTable = ({ data, icons }) => {
  // log('Table log = ', data)
  //   log('Table icons = ', icons)
  // TODO: Get the exchange website from props data to create link

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Rank</TableCell>
              <TableCell align="right">Logo</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">24hr Trade Volume (USD)</TableCell>
              <TableCell align="right">1 Month Trade Volume (USD)</TableCell>
              <TableCell align="right">Total Assets Listed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RowComponent />
            {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default DataTable
