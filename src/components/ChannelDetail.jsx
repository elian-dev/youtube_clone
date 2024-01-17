import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
	const { id } = useParams();

	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	console.log(channelDetail);

	useEffect(() => {
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);

		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					borderRadius: "10px",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden",
				}}>
				<div
					style={{
						width: "90%",
						height: "120px",
						borderRadius: "10px",
						background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%`,
					}}>
					<div
						style={{
							width: "700px",
							height: "120px",
							background: `center / cover no-repeat url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
							margin: "auto",
						}}
					/>
				</div>

				<ChannelCard channelDetail={channelDetail} marginTop="-90px" isCDP />
			</Box>
			<Box display="flex" p="2" m="auto" width="90%">
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
