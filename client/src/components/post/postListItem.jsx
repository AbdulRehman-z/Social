import { Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CreateComment from "../comments/createComment";

const PostListItem = ({ postsList }) => {
  return (
    <Box
      sx={{
        // backgroundColor: grey[500],
        width: "100%",
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
              height: "auto",
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
                height: "100%",
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

              <CreateComment postId={post.id} />
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default PostListItem;
