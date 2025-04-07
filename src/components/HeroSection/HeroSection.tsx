'use client'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <div className="hero-section-wraper">
                <SideBar />

                <div className="work-block">
                    <div className="work-block-wraper">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.15 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="block first">
                            <div className="block-wraper">
                                <div className="title">
                                    <h2>Educations</h2>
                                </div>
                                <div className="content">
                                    <div className="content-wraper">
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>Qualification</p>
                                                    <span>B.Com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>College</p>
                                                    <span>Sunbeam College for women</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="block second">
                            <div className="block-wraper">
                                <div className="title">
                                    <h2>My Expert Area</h2>
                                </div>
                                <div className="block-area">
                                    <div className="block-area-wraper">
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/search.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Search Engine Optimizatio</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/social.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Social Media Marketing</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/website.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Website Development</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/content.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Content creation</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/excel.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Microsoft Excel </span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/power-point.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Microsoft Power Point </span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/canva.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Canva </span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/powtoon.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Powtoon </span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/google-ads.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Google Ads</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.25 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="hero-footer-2-wraper-2">
                            <div className="title">
                                <h2>Acheivements</h2>
                            </div>

                            <h3>1. Social Media </h3>
                            <h3>2. Marketing Mindsets </h3>
                        </motion.div>
                    </div>
                </div>

                <div className="project-block">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.17 }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="block">
                        <div className="block-wraper">
                            <div className="title">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="content">
                                <div className="content-wraper">
                                    <div className="details">
                                        <div className="details-wraper">
                                            {/* <div className="time">
                                                    <span>06-2024-Present</span>
                                                </div> */}
                                            <div className="company-logo">
                                                <Image src='/images/logo/wix.png' width={30} height={30} alt='glo' />
                                            </div>
                                            <div className="company-name">
                                                <p>Wizards Next</p>
                                                <span>Social Media Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="details-wraper">
                                            {/* <div className="time">
                                                    <span>2020-2024</span>
                                                </div> */}
                                            <div className="company-logo">
                                                <Image src='/images/user/logo.png' width={30} height={30} alt='glo' />
                                            </div>
                                            <div className="company-name">
                                                <p>Dreampath Development</p>
                                                <span>Admin & Business Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="details-wraper">
                                            {/* <div className="time">
                                                    <span>2020-2024</span>
                                                </div> */}
                                            <div className="company-logo">
                                                <Image src='/images/user/work.jpg' width={30} height={30} alt='glo' />
                                            </div>
                                            <div className="company-name">
                                                <p>IWAY Digital</p>
                                                <span>Digital Marketing intern</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.22 }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="project-block-wraper">
                        <div className="title">
                            <h2>Certificates</h2>
                            {/* <Link href='#'>
                                All Project
                                <i className="hgi hgi-stroke hgi-arrow-right-02"></i>
                            </Link> */}
                        </div>

                        <div className="box">
                            <img src="/images/certificates/c-01.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="/images/certificates/c-02.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    className="hero-footer-1">
                    <div className="title">
                        <h2>Tools</h2>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/ana.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Google Analytics</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/web.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Google Search Console</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/business.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Google Business Profile</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/trends.webp' width={50} height={50} alt='glo' />
                            </div>
                            <span>Google Trend</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/adwords.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Keyword Planner Tool</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/sem.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>SEM Rush</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/ans.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Answer the Public</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Image src='/images/tools/moz.png' width={50} height={50} alt='glo' />
                            </div>
                            <span>Moz</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.35 }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    className="hero-footer-2">
                    <div className="hero-footer-2-wraper">
                        <div className="marquee">
                            <Marquee>
                                Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences
                            </Marquee>
                        </div>
                        <h2>
                            Let's👋
                            <br />
                            Work Together
                        </h2>
                        <Link href='#'>
                            Let's Talk
                            <i className="hgi hgi-stroke hgi-arrow-up-right-01"></i>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
