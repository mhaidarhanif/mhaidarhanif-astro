export const SITE = {
	name: 'M Haidar Hanif',

	origin: 'https://mhaidarhanif.com',
	basePathname: '/',
	trailingSlash: false,

	title: 'M Haidar Hanif — Educator, Mentor, Consultant, Software Engineer, Web Developer',
	description:
		'⚡ Helping people to be better especially in modern career, web development, software engineering, tech business, and life in general.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 3,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
