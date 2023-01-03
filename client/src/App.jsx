import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CreatePost from "./components/createPost/createPost";
import PostList from "./components/post/postList";

const App = () => {
  return (
    <div>
      <CreatePost />
      <PostList />
    </div>

    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Typography
    //     sx={{
    //       textAlign: "center",
    //       margin: "2rem",
    //     }}
    //     variant="h4"
    //   >
    //     Create Post
    //   </Typography>
    //   <CreatePost />
    //   <PostList />
    // </Box>
  );
};

export default App;
