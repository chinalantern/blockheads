import React, { useState } from 'react'
import millify from 'millify'

import SubRowComponent from './SubRowComponent'
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

const dummyIconURL =
  'https://icons.iconarchive.com/icons/shiftercat/rose/32/Wild-Rose-Pink-2-icon.png'

const RowComponent = ({ rowData, exchangeIcon }) => {
  const [expandRow, setExpandRow] = useState(false)

  const dummyIconTag = () => <img src={dummyIconURL} alt="dummy Icon" />

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} hover={true}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setExpandRow(!expandRow)}
          >
            {expandRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          1
        </TableCell>
        <TableCell align="right">{dummyIconTag()}</TableCell>
        <TableCell align="right">{rowData.name}</TableCell>
        <TableCell align="right">${rowData.volume_1day_usd}</TableCell>
        <TableCell align="right">${rowData.volume_1mth_usd}</TableCell>
        <TableCell align="right">{rowData.data_symbols_count}</TableCell>
      </TableRow>
      <SubRowComponent isExpanded={expandRow} />
    </>
  )
}

export default RowComponent
