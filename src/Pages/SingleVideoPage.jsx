import { Avatar, Box, Typography, Stack, IconButton } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { SuggestionCard } from "../Components";
import { red } from "@mui/material/colors";
import { AiOutlineLike } from "../Components/Icons";

export const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { videos, loading, error } = useSelector((store) => store.explore);
  const singleVideo = videos.find((video) => video._id === videoId);
  const suggestedVideos = videos.filter(
    (video) => video.category === singleVideo.category
  );

  return (
    <Box
      flex={1}
      sx={{
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflowY: "scroll",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box flex={1} minWidth="375px">
        <Box
          sx={{
            width: "100%",
            height: { xs: "360px", md: "540px" },
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            // playing="true"
            controls={true}
            width="100%"
            height="100%"
          />
          <Box
            padding={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Video">
                {singleVideo.creator.charAt(0)}
              </Avatar>
              <Typography variant="h5" padding={1}>
                {singleVideo.creator}
              </Typography>
            </Stack>
            <Stack>
              <IconButton aria-label="Like">
                <AiOutlineLike size={36} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* <Box
        width="400px"
        sx={{
          width: { xs: "100%", md: "400px" },
          borderLeft: { xs: "none", md: "1px solid lightgrey" },
          paddingTop: "0.5rem",
          paddingLeft: "0.5rem",
          margin: { xs: "10rem 0 0 0", md: "0" },
        }}
      >
        <Typography variant="h5">Related Videos</Typography>
        {suggestedVideos.map((singleVideo) => (
          <SuggestionCard key={singleVideo._id} singleVideo={singleVideo} />
        ))}
      </Box> */}
    </Box>
  );
};
