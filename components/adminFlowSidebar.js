import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconClient, IconDashboard, IconIssue, IconNotices2, IconRequest, PhotoUser_09 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function AdminFlowSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_09} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Brent Phillips</div>
						<span className={style.type}>Admin Flow</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/admin-flow" className={router.pathname === "/admin-flow" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/admin-flow/application" className={router.pathname === "/admin-flow/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/admin-flow/notices" className={router.pathname === "/admin-flow/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/admin-flow/issues" className={router.pathname === "/admin-flow/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/admin-flow/refund" className={router.pathname === "/admin-flow/refund" ? style.active : ""}>
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
