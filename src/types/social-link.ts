export type SocialLinks = SocialLink[];

export type SocialLink = {
	label: string;
	href: string;
	iconName: string;
	inHeader?: boolean;
};
