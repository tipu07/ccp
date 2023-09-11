import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconChart, IconClient, IconDashboard, IconIssue, IconNotices2, IconReport, IconRequest, PhotoUser_06 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function AdminSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_06} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>John Wick</div>
						<span className={style.type}>Sales Manager</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/admin" className={router.pathname === "/admin" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/admin/application" className={router.pathname === "/admin/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/admin/notices" className={router.pathname === "/admin/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/admin/issues" className={router.pathname === "/admin/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/admin/reports" className={router.pathname === "/admin/reports" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Refund
							</Link>
						</li>
					</ul>
				</div>
				<p>
					© 2022CrownCreditPro <span>© Copyright</span>
				</p>
			</div>
		</>
	)
}
