import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconClient, IconDashboard, IconDollarCircle, IconNotices2, IconRequest, PhotoUser_10 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function FinanceSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_10} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>John Smith</div>
						<span className={style.type}>Finance Department</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/finance" className={router.pathname === "/finance" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/finance/application" className={router.pathname === "/finance/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/finance/payments" className={router.pathname === "/finance/payments" ? style.active : ""}>
								<Image width={100} height={100} src={IconDollarCircle} alt="" />
								Payments
							</Link>
						</li>
						<li>
							<Link href="/finance/customer" className={router.pathname === "/finance/customer" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Customer
							</Link>
						</li>
						<li>
							<Link href="/finance/notices" className={router.pathname === "/finance/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
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
