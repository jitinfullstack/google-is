import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📸 Images' },
    { url: '/video', text: '📺 Videos' },
];

const Links = () => {
    return (        
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
            <NavLink exact to={url} className="m-2 mb-0 dark:text-blue-300 pb-2" activeClassName="text-blue-600 border-b-2 border-blue-700 dark:text-blue-300  pb-2">{text}</NavLink>
            ))}
        </div>
    )
}

export default Links