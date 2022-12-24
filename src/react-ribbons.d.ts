declare module "react-ribbons" {
	export interface RibbonContainerProps {
		className?: string;
		children?: React.ReactNode;
	}
	export interface CornerRibbonProps {
		color?: string;
		backgroundColor?: string;
		fontFamily?: string;
		styles?: React.CSSProperties;
		children?: React.ReactNode;
	}
	export const RibbonContainer: React.FC<RibbonContainerProps>;
	export const RightCornerRibbon: React.FC<CornerRibbonProps>;
	export const RightCornerLargeRibbon: React.FC<CornerRibbonProps>;
	export const LeftCornerRibbon: React.FC<CornerRibbonProps>;
	export const LeftCornerLargeRibbon: React.FC<CornerRibbonProps>;
	export const RightRibbon: React.FC<CornerRibbonProps>;
	export const RightLargeRibbon: React.FC<CornerRibbonProps>;
	export const LeftRibbon: React.FC<CornerRibbonProps>;
	export const LeftLargeRibbon: React.FC<CornerRibbonProps>;
}
