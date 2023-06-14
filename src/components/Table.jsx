import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({leaderBoardData}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Difficulty</TableCell>
            <TableCell >Number of Qustion</TableCell>
            <TableCell >Final Score</TableCell>
          </TableRow>
        </TableHead>
        {leaderBoardData.map((person) => {
            return (
                <TableBody>

                <TableRow
                  key={person.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {person.playerName}
                  </TableCell>
                  <TableCell >{person.type}</TableCell>
                  <TableCell >{person.difficulty}</TableCell>
                  <TableCell >{person.noOfQuestion}</TableCell>
                  <TableCell >{person.score}</TableCell>
                </TableRow>
    
            </TableBody>
            )
        })}
        
      </Table>
    </TableContainer>
  );
}
