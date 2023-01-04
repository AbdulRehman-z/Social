import { Container, Typography } from "@mui/material";
import { useFetchPostsQuery } from "../../store/store";
import PostListItem from "./postListItem";

const PostList = () => {
  const { data, error, isLoading } = useFetchPostsQuery();

  let content;
  if (isLoading) {
    content = <h5>Wait! Fetching...</h5>;
  } else if (error) {
    content = <h5>Error occured while fetching data😥.Try again</h5>;
  } else {
    content = <PostListItem postsList={data} />;
  }

  return (
    <Container
      sx={{
        width: "80%",
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        My Posts
      </Typography>
      <div>{content}</div>
    </Container>
  );
};

export default PostList;
