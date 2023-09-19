import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconDashboard, IconIssue, IconNotices2, IconRequest, PhotoUser_08 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DianaProcessSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_08} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Tom Chorus</div>
						<span className={style.type}>Diana Process</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/diana-process" className={router.pathname === "/diana-process" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/diana-process/application" className={router.pathname === "/diana-process/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/diana-process/notices" className={router.pathname === "/diana-process/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/diana-process/issues" className={router.pathname === "/diana-process/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
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
