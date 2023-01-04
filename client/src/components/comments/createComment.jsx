import LoadingButton from "@mui/lab/LoadingButton";
import { Box, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

const CreateComment = ({ postId }) => {
  //   const handleCreateComment = async (e) => {
  //     e.preventDefault();
  //     return createComment({ postId, content });
  //   };

  return (
    <Box
      component="form"
      sx={{
        minWidth: "100%",
        marginTop: "1rem",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="standard-multiline-flexible"
        placeholder="Comment on article"
        multiline
        maxRows={4}
        variant="standard"
      />
      <LoadingButton
        // loading={result.isLoading}
        // onClick={handleCreateComment}
        sx={
          {
            //   marginTop: "1rem",
          }
        }
        size="small"
        variant="contained"
        startIcon={<AddCircle />}
      >
        Comment
      </LoadingButton>
    </Box>
  );
};

export default CreateComment;
