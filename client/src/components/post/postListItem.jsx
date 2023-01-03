import { Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const PostListItem = ({ postsList }) => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        bgcolor: grey[300],
      }}
    >
      {Object.values(postsList).map((post) => {
        return (
          <Card
            sx={{
              maxWidth: "20rem",
              backgroundColor: grey[50],
              width: "50%",
              margin: "1rem",
            }}
            key={post.id}
          >
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default PostListItem;
