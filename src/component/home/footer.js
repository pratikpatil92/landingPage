import { menu } from '@/content/content'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div class="footer">
            <p>© 2024 Your Company. All rights reserved. | Designed by <a href="#" target="_blank">Your Name</a></p>

            <ul >
                {menu.map((ele, id) => (
                    <li key={id}><Link href={`${ele.path}`}>{ele.label}</Link></li>
                ))}
            </ul>
        </div>
    )
}
