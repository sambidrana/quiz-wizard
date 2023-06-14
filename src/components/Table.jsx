import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ leaderBoardData }) {
  const categoryNames = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ];

  const categoryName = leaderBoardData.map((cat) => {
    const categoryId = Number(cat.category);
    const category = categoryNames.find((name) => name.id === categoryId);
    return category ? category.name : '';
  });

  // console.log(leaderBoardData.map(cat => cat.category)) //gives ['10', '9', '9', '9']
  // console.log(categoryNames.map((name) => (name.name))) // gives (24) ['General Knowledge', 'Entertainment: Books', 'Entertainment: Film',...
  // console.log(categoryNames.map((name) => (name.id))) //gives (24) [9, 10, 11, 12, 13, 14, 15...
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Difficulty</TableCell>
            <TableCell>Number of Questions</TableCell>
            <TableCell>Final Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderBoardData.map((person, index) => (
            <TableRow key={person.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">{person.playerName}</TableCell>
              <TableCell>{categoryName[index]}</TableCell>
              <TableCell>
                {person.type === "boolean"
                  ? "True / False"
                  : person.type === "multiple"
                  ? "Multiple Choice"
                  : "True / False and Multiple Choice"}
              </TableCell>
              <TableCell>{person.difficulty}</TableCell>
              <TableCell>{person.noOfQuestion}</TableCell>
              <TableCell>{person.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
