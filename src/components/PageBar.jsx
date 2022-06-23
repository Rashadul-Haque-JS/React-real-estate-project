// import { useState, useEffect } from "react";
const PageBar = ({ error, path }) => {
  return (
    <div style={{ background: error !== ''? 'red' :'maroon', color:'white', paddingTop:8, paddingBottom:8}}>
      {error !== "" && <p style={{ textAlign: "center" }}>{error}</p>}
      {error === "" && (
        <p style={{ textAlign: "center", padding: "0px 16px" }}>{path}</p>
      )}
    </div>
  );
};

export default PageBar;
