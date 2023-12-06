import React from 'react'
import { Button, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

const Import = (props) => {
    // fill out this component

    return (
        <TableContainer component={Paper}>
            <h2>Count: {props.makes.length}</h2>
            <p>Import Component</p>
            <Button variant="contained" onClick={props.fetchMakes}>
                Import
            </Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.makes.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.MakeId}</TableCell>
                            <TableCell>{row.MakeName}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => {props.deleteMake(index);}}>
                                    <MoreVertIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Import