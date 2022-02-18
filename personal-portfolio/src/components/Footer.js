//Footer Component
import React from "react";
import { BottomNavigationAction } from '@mui/material';
import LinkedInImg from '@mui/icons-material/LinkedIn';
import GitHubImg from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer>
            <BottomNavigationAction icon={<GitHubImg />} href="https://github.com/Teeemster" target="_blank" />
            <BottomNavigationAction icon={<LinkedInImg />} href="https://www.linkedin.com/in/jonathan-beach-40a231112/" target="_blank" />
        </footer>
    )
}