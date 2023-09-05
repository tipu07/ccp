import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconChart, IconClient, IconCreditCard, IconDashboard, IconDollar, IconEnvelope, IconNotices, IconPayouts, IconPhoneCircle, IconPlus, IconRequest, IconReward, IconUser, PhotoUser_04 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function SalesPersonSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_04} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Stephan Smith</div>
						<span className={style.type}>Sales</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/sales-person" className={router.pathname === "/sales-person" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/sales-person/calls" className={router.pathname === "/sales-person/calls" ? style.active : ""}>
								<Image width={100} height={100} src={IconPhoneCircle} alt="" />
								Calls
							</Link>
						</li>
						<li>
							<Link href="/sales-person/application" className={router.pathname === "/sales-person/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								My Application
							</Link>
						</li>
						<li>
							<Link href="/sales-person/sales" className={router.pathname === "/sales-person/sales" ? style.active : ""}>
								<Image width={100} height={100} src={IconChart} alt="" />
								Sales
							</Link>
						</li>
						<li>
							<Link href="/sales-person/customer" className={router.pathname === "/sales-person/customer" ? style.active : ""}>
								<Image width={100} height={100} src={IconUser} alt="" />
								Customer
							</Link>
						</li>
						<li>
							<Link href="/sales-person/notices" className={router.pathname === "/sales-person/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/sales-person/issue" className={router.pathname === "/sales-person/issue" ? style.active : ""}>
								<Image width={100} height={100} src={IconDollar} alt="" />
								Issue
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
