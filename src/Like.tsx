import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";

const Like = ({ onClick }: props) => {
	const [liked, setLiked] = useState(false);

	const toggleLike = () => {
		setLiked(!liked);
		onClick();
	};

	return (
		<div onClick={toggleLike} style={{ cursor: "pointer", fontSize: "48px" }}>
			{liked ? <BsHeartFill color="#ff6b81" /> : <BsHeart />}
		</div>
	);
};

export default Like;
