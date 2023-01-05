import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { Box, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import CommentsList from "./commentsList";
import { useState } from "react";
import { useCreateCommentMutation } from "../../store/store";

const CreateComment = ({ postId, comments }) => {
  const [content, setContent] = useState("");
  const [createComment, result] = useCreateCommentMutation(postId);

  const handleCreateComment = async (e) => {
    console.log(e);
    e.preventDefault();
    createComment({ postId, content });
    setContent("");
  };

  return (
    <Box
      sx={{
        minWidth: "100%",
        marginTop: "1rem",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CommentsList postId={postId} comments={comments} />
      <Box
        component="form"
        onSubmit={handleCreateComment}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="standard-multiline-flexible"
          placeholder="Comment on article"
          multiline
          maxRows={4}
          variant="standard"
        />
        <LoadingButton
          loading={result.isLoading}
          type="submit"
          size="small"
          variant="contained"
          startIcon={<AddCircle />}
        >
          Comment
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default CreateComment;
