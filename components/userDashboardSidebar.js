import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconAgreement, IconApplication2, IconBook, IconDashboard, IconEnvelope, IconInvoice, IconNotices, IconRefund, PhotoUser_08 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function UserDashboardSidebar(props) {
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
						<div className={style.name}>Aoral Motadine</div>
						<span className={style.type}>User Dashboard</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/user-dashboard" className={router.pathname === "/user-dashboard" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Home
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/applications" className={router.pathname === "/user-dashboard/applications" ? style.active : ""}>
								<Image width={100} height={100} src={IconApplication2} alt="" />
								My Applications
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/installment-book" className={router.pathname === "/user-dashboard/installment-book" ? style.active : ""}>
								<Image width={100} height={100} src={IconBook} alt="" />
								Installment Book
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/agreement" className={router.pathname === "/user-dashboard/agreement" ? style.active : ""}>
								<Image width={100} height={100} src={IconAgreement} alt="" />
								Agreement
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/invoices" className={router.pathname === "/user-dashboard/invoices" ? style.active : ""}>
								<Image width={100} height={100} src={IconInvoice} alt="" />
								Invoices
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/messages" className={router.pathname === "/user-dashboard/messages" ? style.active : ""}>
								<Image width={100} height={100} src={IconEnvelope} alt="" />
								Messages
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/ccp-notice" className={router.pathname === "/user-dashboard/ccp-notice" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices} alt="" />
								CCP Notice
							</Link>
						</li>
						<li>
							<Link href="/user-dashboard/refund-policy" className={router.pathname === "/user-dashboard/refund-policy" ? style.active : ""}>
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
