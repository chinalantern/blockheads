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
} from './Imports'
import { log } from '../../utils/Helpers'

const RowComponent = () => {
  const [expandRow, setExpandRow] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} hover="true">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setExpandRow(!expandRow)}
          >
            {expandRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Some row name info here
        </TableCell>
        <TableCell align="right">calories</TableCell>
        <TableCell align="right">fat</TableCell>
        <TableCell align="right">carbs</TableCell>
        <TableCell align="right">protein</TableCell>
      </TableRow>
    </>
  )
}

export default RowComponent
