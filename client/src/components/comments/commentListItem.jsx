import { Box, Typography } from "@mui/material";
import React from "react";

const CommentListItem = ({ commentsList }) => {
  //   console.log("This is commentsList", commentsList);
  return (
    <Box>
      {commentsList.map((comment) => {
        return (
          <Typography
            key={comment.id}
            sx={{
              fontSize: "0.9rem",
              padding: "0.1rem",
            }}
          >
            {comment.content}
          </Typography>
        );
      })}
    </Box>
  );
};

export default React.memo(CommentListItem);
