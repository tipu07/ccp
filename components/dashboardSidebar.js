import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconAgreement, IconApplication2, IconBook, IconDashboard, IconEnvelope, IconInvoice, IconNotice, IconRefund, PhotoUser_01 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DashboardSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_01} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Jennifer</div>
						<span className={style.type}>Customers</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/dashboard" className={router.pathname === "/dashboard" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/dashboard/application" className={router.pathname === "/dashboard/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconApplication2} alt="" />
								My Application
							</Link>
						</li>
						<li>
							<Link href="/dashboard/instalment-book" className={router.pathname === "/dashboard/instalment-book" ? style.active : ""}>
								<Image width={100} height={100} src={IconBook} alt="" />
								Instalment Book
							</Link>
						</li>
						<li>
							<Link href="/dashboard/agreement" className={router.pathname === "/dashboard/agreement" ? style.active : ""}>
								<Image width={100} height={100} src={IconAgreement} alt="" />
								Agreement
							</Link>
						</li>
						<li>
							<Link href="/dashboard/invoices" className={router.pathname === "/dashboard/invoices" ? style.active : ""}>
								<Image width={100} height={100} src={IconInvoice} alt="" />
								Invoices
							</Link>
						</li>
						<li>
							<Link href="/dashboard/messages" className={router.pathname === "/dashboard/messages" ? style.active : ""}>
								<Image width={100} height={100} src={IconEnvelope} alt="" />
								Messages
							</Link>
						</li>
						<li>
							<Link href="/dashboard/ccp-notice" className={router.pathname === "/dashboard/ccp-notice" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotice} alt="" />
								CCP Notice
							</Link>
						</li>
						<li>
							<Link href="/dashboard/refund-policy" className={router.pathname === "/dashboard/refund-policy" ? style.active : ""}>
								<Image width={100} height={100} src={IconRefund} alt="" />
								Refund Policy
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
