import {
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	bcs,
	ubihive,
	carhub,
	jobforte,
	ctracker,
	mcl,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'React Developer',
		icon: web,
	},
	{
		title: 'MERN stack Developer',
		icon: backend,
	},
	{
		title: 'Full-stack Developer',
		icon: web,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
];

const experiences = [
	{
		title: 'Junior Software Developer',
		company_name: 'BCS Technology International PTY LTD-Philippines.',
		icon: bcs,
		iconBg: '#383E56',
		date: 'September 2021 — September 2023',
		points: [
			'Worked with multiple web development (HMO) platform using React/Next.js framework with Typescript.',
			'Collaborating with teams by following SDLC, Agile and scrum methodologies for both front-end and back-end.',
			'Used Nodejs for creating API endpoints and tested through Postman and MongoDB.',
		],
	},
	{
		title: 'Junior JavaScript Developer',
		company_name: 'Ubihive Systems Inc,',
		icon: ubihive,
		iconBg: '#383E56',
		date: 'June 2021 — August 2021',
		points: [
			'Worked with CTO to develop new features and modules using React.',
			'Bug fixing and feature adding for different applications (dental, restaurant and hospital apps).',
			'Followed through Agile methodologies and scrum with a team for front-end and back-end sides.',
			'Used MongoDB, Graphql in backend with microservice for dental applications.',
		],
	},
	{
		title: 'Software Developer',
		company_name: 'Mapua Malayan Colleges Laguna',
		icon: mcl,
		iconBg: '#383E56',
		date: 'Jan 2022 - Jan 2023',
		points: [
			'Integrating XML code interface and MS SQL database into C# program.',
			'Inspecting former tap ID system of the school hardware.',
			'Remaking of the tap ID system with C#.',
		],
	},
];

const projects = [
	{
		name: 'Car Hub',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nextjs',
				color: 'orange-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carhub,
		source_code_link: 'https://github.com/patrick022/Next-CarHub',
		demo_link: 'https://next-car-hub-patrick022.vercel.app/',
	},
	{
		name: 'JobForte',
		description:
			'Web application for personal tracking of jobs and their statuses, provides charts and account system for users',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
			{
				name: 'Mongoose',
				color: 'pink-text-gradient',
			},
		],
		image: jobforte,
		source_code_link: 'https://github.com/patrick022/JobForte-MERN-production',
		demo_link: 'https://jobforte.onrender.com/',
	},
	{
		name: 'Covid-19 Tracker',
		description:
			'A website tracker for Covid-19 cases around the world, api from resource health',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: ctracker,
		source_code_link: 'https://github.com/patrick022/Covid-19-Tracker',
		demo_link: 'https://covid-19-tracker-1339f.web.app/',
	},
];

export { services, technologies, experiences, projects };
