import { Avatar, Box, Typography, Stack, IconButton } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { SuggestionCard, PlaylistModal } from "../Components";
import { red } from "@mui/material/colors";
import {
  isVideoLiked,
  isVideoInWatchLater,
} from "../Components/Utils/videoFinders";
import {
  AiOutlineLike,
  AiFillLike,
  TbPlaylistAdd,
  MdWatchLater,
  MdOutlineWatchLater,
} from "../Components/Icons";
import {
  addToWatchLater,
  deleteVideoFromWatchLater,
} from "../features/WatchLaterSlice";
import { useState } from "react";

export const SingleVideoPage = () => {
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { videos, loading, error } = useSelector((store) => store.explore);

  const watchLaterList = useSelector((store) => store.watchlater.watchLater);
  console.log(watchLaterList);

  const singleVideo = videos.find((video) => video._id === videoId);
  const suggestedVideos = videos.filter(
    (video) => video.category === singleVideo.category
  );

  return (
    <>
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
              playing={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            padding={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
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
              <Stack direction="row">
                <IconButton aria-label="Like" title="Like">
                  <AiOutlineLike size={36} />
                </IconButton>
                <IconButton
                  aria-label="Playlist"
                  title="Add to Playlist"
                  onClick={() => setIsPlaylistOpen((prev) => !prev)}
                >
                  <TbPlaylistAdd size={36} />
                </IconButton>
                {isVideoInWatchLater(watchLaterList, singleVideo._id) ? (
                  <IconButton
                    aria-label="WatchLater"
                    onClick={() =>
                      dispatch(deleteVideoFromWatchLater(singleVideo))
                    }
                    title="Add to Watchlater"
                  >
                    <MdWatchLater size={36} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="WatchLater"
                    onClick={() => dispatch(addToWatchLater(singleVideo))}
                    title="Remove from Watchlater"
                  >
                    <MdOutlineWatchLater size={36} />
                  </IconButton>
                )}
              </Stack>
            </Box>
            <Box>
              <Typography variant="body1" paddingTop={4}>
                {singleVideo.description}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          width="300px"
          sx={{
            width: { xs: "100%", md: "400px" },
            borderLeft: { xs: "none", md: "1px solid lightgrey" },
            paddingTop: "0.5rem",
            paddingLeft: "0.5rem",
            margin: { xs: "1rem 0 0 0", md: "0" },
          }}
        >
          <Typography variant="h5">Related Videos</Typography>
          {suggestedVideos.map((singleVideo) => (
            <SuggestionCard key={singleVideo._id} singleVideo={singleVideo} />
          ))}
        </Box>
      </Box>
      <PlaylistModal
        video={singleVideo}
        setNestModal={setIsPlaylistOpen}
        nestModal={isPlaylistOpen}
      />
    </>
  );
};
