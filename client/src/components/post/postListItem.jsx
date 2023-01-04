import { Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CreateComment from "../comments/createComment";

const PostListItem = ({ postsList }) => {
  console.log("This is data");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {Object.values(postsList).map((post) => {
        return (
          <Card
            sx={{
              width: "40%",
              minheight: "20rem",
              backgroundColor: grey[400],
              marginTop: "2rem",
              padding: "0.8rem",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={post.id}
          >
            <CardContent
              sx={{
                width: "100%",
                maxheight: "100%",
                padding: "0.5rem",
                backgroundColor: grey[300],
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.1rem",
                }}
              >
                {post.title}
              </Typography>
            </CardContent>
            <CreateComment postId={post.id} />
          </Card>
        );
      })}
    </Box>
  );
};

export default PostListItem;
