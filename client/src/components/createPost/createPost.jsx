import { useState } from "react";
import { useCreatePostMutation, useFetchPostsQuery } from "../../store/store";
import AddCircle from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/system";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [createPost, result] = useCreatePostMutation();
  const handleCreatePost = async (e) => {
    e.preventDefault();
    return createPost({ title });
  };

  return (
    <Box
      component="form"
      onSubmit={handleCreatePost}
      sx={{
        width: "70%",
        margin: "auto",
        "& .MuiTextField-root": { m: 1, width: "50ch" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="standard-multiline-static"
        label="Enter Title"
        multiline
        rows={4}
        variant="standard"
      />
      <LoadingButton
        loading={result.isLoading}
        onClick={handleCreatePost}
        variant="contained"
        startIcon={<AddCircle />}
      >
        Create Post
      </LoadingButton>
    </Box>
  );
};

export default CreatePost;
