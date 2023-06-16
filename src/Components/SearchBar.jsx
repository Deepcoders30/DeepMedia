import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate=useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }

    setsearchTerm('');

  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => {setsearchTerm(e.target.value)}}
      />
      <IconButton>
        <Search type="submit" sx={{p:'2px', color:'red'}} />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
