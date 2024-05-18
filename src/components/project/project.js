"use client"
import Image from "next/image"
import styles from "./style.module.css"
import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

import React from 'react'

export default function index({project}) {

    const [isActive, setIsActive] = useState(false);
    const { title1, title2, src } = project;

  return (
    <div
    onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}
    className={styles.project}
    >
        <p>{title1}</p>
        <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
            <Image alt="Imagens do projeto" src={`/media/${src}`} width="250" height={250} />
        </motion.div>
        <p>{title2}</p>
    </div>
  )
}
