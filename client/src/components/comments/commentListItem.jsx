import { Box, Typography } from "@mui/material";
import React from "react";

const CommentListItem = ({ commentsList }) => {
  console.log("This is commentsList", commentsList);

  return (
    <Box>
      {commentsList.map((comment) => {
        if (comment.status === "approved") {
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
        }

        if (comment.status === "pending") {
          return (
            <Typography
              key={comment.id}
              sx={{
                fontSize: "0.9rem",
                padding: "0.1rem",
              }}
            >
              This comment is awaiting moderation
            </Typography>
          );
        }

        if (comment.status === "rejected") {
          return (
            <Typography
              key={comment.id}
              sx={{
                fontSize: "0.9rem",
                padding: "0.1rem",
              }}
            >
              This comment has been rejected
            </Typography>
          );
        }
      })}
    </Box>
  );
};

export default React.memo(CommentListItem);
