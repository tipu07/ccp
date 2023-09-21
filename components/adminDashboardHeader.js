import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Head from "next/head"
import Image from "next/image"
import { Favicon, IconBell, IconSearch } from "./images"
import Link from "next/link"

export default function AdminDashboardHeader(props) {
	const { isActive, onToggle, pageTitle } = props
	/* const [sidebarShow, setSidebarShow] = useState(false)
	const sidebarShowHandle = () => {
		setSidebarShow(!sidebarShow)
	} */
	return (
		<>
			<Head>
				<title>{pageTitle} — CrownCreditPro</title>
				<meta name="description" content="CrownCreditPro" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<div id={style.top_header}>
				<div className={style.title}>
					{pageTitle}
					<span>12:15 PM at 10th February 2021</span>
				</div>
				<form action="" method="post" className={style.query_form}>
					<input type="text" name="" id="" className={style.input} placeholder="Search customers ID..." />
					<button type="submit">
						<Image width={100} height={100} src={IconSearch} alt="" />
					</button>
				</form>
				<Link href="/" id={style.notification_btn}>
					<Image width={100} height={100} src={IconBell} alt="" />
				</Link>
				<div id={style.pro_btn}>
					<div className={`${style.ico}`}>
						<Image width={200} height={200} src={Favicon} alt="" />
					</div>
				</div>
				<button type="button" className={`${style.toggle} ${isActive ? style.active : ""}`} onClick={() => onToggle()}>
					<span></span>
				</button>
			</div>
		</>
	)
}
