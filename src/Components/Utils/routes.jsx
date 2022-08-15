import {
  IoHome,
  MdFeaturedPlayList,
  MdExplore,
  MdWatchLater,
  AiFillLike,
} from "../Icons";

export const routes = [
  {
    pathToGo: "/",
    pathName: "HomePage",
    icon: IoHome,
  },
  {
    pathToGo: "/Explore",
    pathName: "Explore",
    icon: MdExplore,
  },
  {
    pathToGo: "/Playlists",
    pathName: "Playlists",
    icon: MdFeaturedPlayList,
  },
  {
    pathToGo: "/LikedVideos",
    pathName: "Liked Videos",
    icon: AiFillLike,
  },
  {
    pathToGo: "/WatchLater",
    pathName: "WatchLater",
    icon: MdWatchLater,
  },
];
