'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { menu } from '@/content/content';

export default function Navbar() {
    const router = usePathname();
    console.log(router)


    const toggle = () => {
        const menuLinks = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menuLinks.classList.toggle('open');
        icon.classList.toggle('open');
    };

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo"><Image src="/logo.png" width="400" height="400" alt="logo" /></div>
                <ul className="nav-links">
                    {menu.map((ele, id) => (
                        <li key={id}><Link className={router === ele.path ? 'active' : ''} href={`${ele.path}`}>{ele.label}</Link></li>
                    ))}
                </ul>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo"><Image src="/logo.png" width="200" height="200" alt="logo" /></div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        {menu.map((ele, id) => (
                            <li key={id}><Link href={`${ele.path}`}>{ele.label}</Link></li>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
