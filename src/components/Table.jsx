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
    return category ? category.name : "";
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Player Name
            </TableCell>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Category
            </TableCell>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Type
            </TableCell>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Difficulty
            </TableCell>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Number of Questions
            </TableCell>
            <TableCell
              align="center"
              className="table-cell-heading"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Final Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderBoardData.map((person, index) => (
            <TableRow
              key={person.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1.1rem" }}
                component="th"
                scope="row"
              >
                {person.playerName}
              </TableCell>
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1rem" }}
              >
                {categoryName[index] ? categoryName[index] : "Mixed Category"}
              </TableCell>
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1rem" }}
              >
                {person.type === "boolean"
                  ? "True / False"
                  : person.type === "multiple"
                  ? "Multiple Choice"
                  : "True / False and Multiple Choice"}
              </TableCell>
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1rem" }}
              >
                {person.difficulty ? person.difficulty : "Mixed"}
              </TableCell>
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1rem" }}
              >
                {person.noOfQuestion}
              </TableCell>
              <TableCell
                align="center"
                className="table-cell"
                style={{ fontSize: "1rem" }}
              >
                {person.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
