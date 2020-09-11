import React from 'react';

interface PageLink {
	active: boolean;
	name: string;
}

export const PageLink: React.FC<PageLink> = (props: PageLink) => {
	const { name, active } = props;
	return <div className={`page-link ${active ? 'page-link-active' : ''}`}>{name}</div>;
};
