import React from "react";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "warning.light", marginTop: "20px", ml: "10px" }}
      >
        Hello
      </Button>
      <Button variant="contained" color="error">
        Warning
      </Button>
      <p
        style={{
          color: "red",
          marginTop: "50px",
          backgroundColor: "yellow",
          padding: "10px",
          borderRadius: "10px",
          typography: "h1",
          fontWeight:"h6.fontWeight"
        }}
      >
        This is error
      </p>
      <Button sx={{
        borderColor:(theme)=>theme.typography.h1.color,
        borderStyle:"solid",
        borderWidth:"5px"
      }}>
        button
      </Button>
    </div>
  );
};

export default App;
