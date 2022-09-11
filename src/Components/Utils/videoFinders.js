export const isVideoInPlaylist = (playlist, _id) => {
return    playlist?.videos.find((video)=> video._id === _id)
}

export const isVideoInHistory = (history, _id) => {
  return history?.find((video)=> video._id === _id)
}

export const isVideoLiked = (likedVideos, _id) => {
   return likedVideos?.find((video)=> video._id === _id)
}

export const isVideoInWatchLater = (watchLater, _id) => {
  return  watchLater?.find((video)=> video._id === _id)
}
