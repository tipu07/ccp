import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconChart, IconClient, IconDashboard, IconIssue, IconNotices2, IconReport, IconRequest, PhotoUser_03 } from "./images"
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
						<Image width={200} height={200} src={PhotoUser_03} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Samira Jones</div>
						<span className={style.type}>Bureau Manager</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/bureau-manager" className={router.pathname === "/bureau-manager" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/files" className={router.pathname === "/bureau-manager/files" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Files
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/bureau-team" className={router.pathname === "/bureau-manager/bureau-team" ? style.active : ""}>
								<Image width={100} height={100} src={IconChart} alt="" />
								Bureau Team
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/customers" className={router.pathname === "/bureau-manager/customers" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Customers
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/notices" className={router.pathname === "/bureau-manager/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/issues" className={router.pathname === "/bureau-manager/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/bureau-manager/reports" className={router.pathname === "/bureau-manager/reports" ? style.active : ""}>
								<Image width={100} height={100} src={IconReport} alt="" />
								Reports
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
