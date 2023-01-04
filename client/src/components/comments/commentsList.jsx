import React from "react";
import { Box, Typography } from "@mui/material";
import { useFetchCommentsQuery } from "../../store/store";
import CommentListItem from "./commentListItem";

const CommentsList = ({ postId }) => {
  const { data, error, isFetching } = useFetchCommentsQuery(postId);

  let content;
  if (error) {
    content = <Typography>Something went wrong😥</Typography>;
  } else if (isFetching) {
    content = <Typography>Loading...</Typography>;
  } else {
    content = <CommentListItem commentsList={data} />;
  }

  return (
    <Box
      sx={{
        marginLeft: "-14rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Comments</Typography>
      <Box
        sx={{
          width: "100%",
          padding: "0.5rem",
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default React.memo(CommentsList);
