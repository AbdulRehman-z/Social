import { Container, Typography } from "@mui/material";
import { useFetchPostsQuery, useFetchAllPostsQuery } from "../../store/store";
import PostListItem from "./postListItem";

const PostList = () => {
  const { data, error, isLoading } = useFetchAllPostsQuery();
  console.log("this is data", data);
  let content;
  if (isLoading) {
    content = (
      <h5
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "6rem",
        }}
      >
        Wait! Fetching...
      </h5>
    );
  } else if (error) {
    content = (
      <h5
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "6rem",
        }}
      >
        Error occured while fetching data😥.Try again
      </h5>
    );
  } else {
    content = <PostListItem postsList={data} />;
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        // backgroundColor: "#f5f",
        padding: "0.5rem",
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
