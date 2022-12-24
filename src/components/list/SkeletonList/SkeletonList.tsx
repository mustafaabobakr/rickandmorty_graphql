import { memo } from "react";
import { Skeleton } from "@mui/material";
import styles from "./SkeletonList.module.css";

interface SkeletonListProps {
	numberOfItems: number;
	width?: number;
	height?: number;
}
const SkeletonList: React.FC<SkeletonListProps> = ({ numberOfItems, width, height }) => {
	return (
		<section className={styles["container"]}>
			{[...Array(numberOfItems)].map((_, i) => (
				<Skeleton key={i} variant="rectangular" width={width} height={height} />
			))}
		</section>
	);
};

SkeletonList.defaultProps = {
	numberOfItems: 20,
	width: 300,
	height: 480,
};
export default memo(SkeletonList);
