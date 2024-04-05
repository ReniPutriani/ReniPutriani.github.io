export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Reni Putriani',
    subtitle: 'Pena',
    description: 'Tulisan yang berisi tentang pengalaman, pemikiran, dan hal-hal yang saya pelajari.',
    image: {
        src: '/avatar.png',
        alt: 'Reni Putriani Blog',
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/ReniPutriani'
        }
    ],
    postsPerPage: 8,
};

export default siteConfig;
