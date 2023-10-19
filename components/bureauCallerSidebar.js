import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconClient, IconDashboard, IconIssue, IconNotices2, IconRequest, PhotoUser_02 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function BureauCallerSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_02} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>John Smith</div>
						<span className={style.type}>Bureau Caller</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/bureau-caller" className={router.pathname === "/bureau-caller" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/bureau-caller/application" className={router.pathname === "/bureau-caller/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/bureau-caller/notices" className={router.pathname === "/bureau-caller/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/bureau-caller/issues" className={router.pathname === "/bureau-caller/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/bureau-caller/refund" className={router.pathname === "/bureau-caller/refund" ? style.active : ""}>
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
