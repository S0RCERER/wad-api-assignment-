import React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({page, setPage}) => {
  function handleChange(_e, p) {
        setPage(p);
    }

  return(
      <div style={{
        position: "fixed",
        bottom: 0,
        zIndex: 200,
        background: "white",
        padding: "10px 80px",
        width: "100%",
      }}>
        <Pagination 
        showFirstButton showLastButton 
        page={page}
        onChange={handleChange}
        count={30}
        color="primary"
        size="large"
        />
      </div>
  );
}


export default CustomPagination