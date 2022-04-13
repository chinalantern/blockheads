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
} from './Imports'
import { log } from '../../utils/Helpers'

const SubRowComponent = ({isExpanded}) => {
    return (
      <>
        <TableRow sx={{ backgroundColor: 'gray' }}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  PLACEHOLDER
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Data to loop over */}
                    <TableRow key={114564}>
                      <TableCell component="th" scope="row">
                        {2022}
                      </TableCell>
                      <TableCell> Some Customer ID</TableCell>
                      <TableCell align="right">Some amount</TableCell>
                      <TableCell align="right">something</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
}
export default SubRowComponent