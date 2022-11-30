export type SocialLinks = SocialLink[];

export type SocialLink = {
	label: string;
	slug?: string;
	colorCode?: string;
	href: string;
	iconName: string;
	inHeader?: boolean;
};
