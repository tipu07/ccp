import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconChart, IconClient, IconDashboard, IconIssue, IconNotices2, IconReport, IconRequest, PhotoUser_06 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function SalesManagerSidebar(props) {
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
							<Link href="/sales-manager" className={router.pathname === "/sales-manager" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/application" className={router.pathname === "/sales-manager/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/sales-team" className={router.pathname === "/sales-manager/sales-team" ? style.active : ""}>
								<Image width={100} height={100} src={IconChart} alt="" />
								Sales Team
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/customers" className={router.pathname === "/sales-manager/customers" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Customers
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/notices" className={router.pathname === "/sales-manager/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/issues" className={router.pathname === "/sales-manager/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/sales-manager/reports" className={router.pathname === "/sales-manager/reports" ? style.active : ""}>
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
