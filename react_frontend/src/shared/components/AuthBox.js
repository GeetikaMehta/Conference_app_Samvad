import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(#526D82,#9DB2BF, #DDE6ED)",
  padding: "20px",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width:295,
          maxWidth: "90%",
          height: "auto",
          bgcolor: "#27374D",
          borderRadius: "12px",
          boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          color: "#DDE6ED",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;






























// import React from "react";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/system";

// const BoxWrapper = styled("div")({
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   background: "#5865F2",
// });

// const AuthBox = (props) => {
//   return (
//     <BoxWrapper>
//       <Box
//         sx={{
//           width: 700,
//           height: 400,
//           bgcolor: "#36393f",
//           borderRadius: "5px",
//           boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
//           display: "flex",
//           flexDirection: "column",
//           padding: "25px",
//         }}
//       >
//         {props.children}
//       </Box>
//     </BoxWrapper>
//   );
// };

// export default AuthBox;
