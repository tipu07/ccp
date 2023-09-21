import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconAffiliate, IconApplication2, IconCog, IconCommission, IconCrowned, IconCustomer, IconDashboard, IconDispute, IconEnvelope, IconInstallment, IconInvoice, IconTeam, IconWithdraw, PhotoUser_05 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function AdminDashboardSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_05} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Monica Kajvral</div>
						<span className={style.type}>Admin Dashboard</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/admin-dashboard" className={router.pathname === "/admin-dashboard" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Home
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/manage-applications" className={router.pathname === "/admin-dashboard/manage-applications" ? style.active : ""}>
								<Image width={100} height={100} src={IconApplication2} alt="" />
								Manage Applications
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/manage-customers" className={router.pathname === "/admin-dashboard/manage-customers" ? style.active : ""}>
								<Image width={100} height={100} src={IconCustomer} alt="" />
								Manage Customers
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/withdraw-request" className={router.pathname === "/admin-dashboard/withdraw-request" ? style.active : ""}>
								<Image width={100} height={100} src={IconWithdraw} alt="" />
								Withdraw Request
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/installments" className={router.pathname === "/admin-dashboard/installments" ? style.active : ""}>
								<Image width={100} height={100} src={IconInstallment} alt="" />
								Installments
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/invoices" className={router.pathname === "/admin-dashboard/invoices" ? style.active : ""}>
								<Image width={100} height={100} src={IconInvoice} alt="" />
								Invoice
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/client-inbox" className={router.pathname === "/admin-dashboard/client-inbox" ? style.active : ""}>
								<Image width={100} height={100} src={IconEnvelope} alt="" />
								Client Inbox
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/weekly-commissions" className={router.pathname === "/admin-dashboard/weekly-commissions" ? style.active : ""}>
								<Image width={100} height={100} src={IconCommission} alt="" />
								Weekly Commissions
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/affiliates" className={router.pathname === "/admin-dashboard/affiliates" ? style.active : ""}>
								<Image width={100} height={100} src={IconAffiliate} alt="" />
								Affiliates
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/dispute-list" className={router.pathname === "/admin-dashboard/dispute-list" ? style.active : ""}>
								<Image width={100} height={100} src={IconDispute} alt="" />
								Dispute List
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/crowned-list" className={router.pathname === "/admin-dashboard/crowned-list" ? style.active : ""}>
								<Image width={100} height={100} src={IconCrowned} alt="" />
								Crowned List
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/team" className={router.pathname === "/admin-dashboard/team" ? style.active : ""}>
								<Image width={100} height={100} src={IconTeam} alt="" />
								Team
							</Link>
						</li>
						<li>
							<Link href="/admin-dashboard/settings" className={router.pathname === "/admin-dashboard/settings" ? style.active : ""}>
								<Image width={100} height={100} src={IconCog} alt="" />
								Settings
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
