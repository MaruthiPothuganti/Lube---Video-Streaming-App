import { Box, Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { VidCard } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/ExploreSlice";

const chipsInitialState = [
  { name: "All", id: 1, icon: true },
  { name: "HTML", id: 2 },
  { name: "CSS", id: 3 },
  { name: "JS", id: 4 },
  { name: "ReactJS", id: 5 },
];

export const Explore = () => {
  const [chips, setChips] = useState(chipsInitialState);
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((store) => store.explore);
  const [videoList, setVideoList] = useState(videos);
  console.log(videoList);
  const filterVideos = (chip) => {
    if (chip.name !== "All") {
      return [...videos].filter((video) => video.category === chip.name);
    }
    return videos;
  };

  const handleClick = (chip) => {
    const newChips = chips.map((item) =>
      chip.id === item.id ? { ...item, icon: true } : { ...item, icon: false }
    );
    setChips(newChips);
    setVideoList(filterVideos(chip));
  };

  useEffect(() => {
    dispatch(fetchVideos({ setVideoList }));
  }, []);

  return (
    <Box
      flex={1}
      sx={{
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflowY: "scroll",
      }}
    >
      <Stack direction="row" gap={1}>
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.name}
            onClick={() => handleClick(chip)}
            icon={chip.icon ? <FcCheckmark /> : null}
          />
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          padding: "1rem",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        {videoList.map((video) => {
          return <VidCard key={video.id} video={video} />;
        })}
      </Box>
    </Box>
  );
};
