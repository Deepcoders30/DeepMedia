import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";
import { Link } from "react-router-dom";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "310px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "310px" }, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
