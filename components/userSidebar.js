import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconAffiliate, IconApplication2, IconCog, IconCommission, IconCrowned, IconCustomer, IconDashboard, IconDispute, IconEnvelope, IconInstallment, IconInvoice, IconTeam, IconWithdraw, PhotoUser_01 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function UserSidebar(props) {
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
							<Link href="/user" className={router.pathname === "/user" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Home
							</Link>
						</li>
						<li>
							<Link href="/user/manage-applications" className={router.pathname === "/user/manage-applications" ? style.active : ""}>
								<Image width={100} height={100} src={IconApplication2} alt="" />
								Manage Applications
							</Link>
						</li>
						<li>
							<Link href="/user/manage-customers" className={router.pathname === "/user/manage-customers" ? style.active : ""}>
								<Image width={100} height={100} src={IconCustomer} alt="" />
								Manage Customers
							</Link>
						</li>
						<li>
							<Link href="/user/withdraw-request" className={router.pathname === "/user/withdraw-request" ? style.active : ""}>
								<Image width={100} height={100} src={IconWithdraw} alt="" />
								Withdraw Request
							</Link>
						</li>
						<li>
							<Link href="/user/installments" className={router.pathname === "/user/installments" ? style.active : ""}>
								<Image width={100} height={100} src={IconInstallment} alt="" />
								Installments
							</Link>
						</li>
						<li>
							<Link href="/user/invoices" className={router.pathname === "/user/invoices" ? style.active : ""}>
								<Image width={100} height={100} src={IconInvoice} alt="" />
								Invoice
							</Link>
						</li>
						<li>
							<Link href="/user/client-inbox" className={router.pathname === "/user/client-inbox" ? style.active : ""}>
								<Image width={100} height={100} src={IconEnvelope} alt="" />
								Client Inbox
							</Link>
						</li>
						<li>
							<Link href="/user/weekly-commissions" className={router.pathname === "/user/weekly-commissions" ? style.active : ""}>
								<Image width={100} height={100} src={IconCommission} alt="" />
								Weekly Commissions
							</Link>
						</li>
						<li>
							<Link href="/user/affiliates" className={router.pathname === "/user/affiliates" ? style.active : ""}>
								<Image width={100} height={100} src={IconAffiliate} alt="" />
								Affiliates
							</Link>
						</li>
						<li>
							<Link href="/user/dispute-list" className={router.pathname === "/user/dispute-list" ? style.active : ""}>
								<Image width={100} height={100} src={IconDispute} alt="" />
								Dispute List
							</Link>
						</li>
						<li>
							<Link href="/user/crowned-list" className={router.pathname === "/user/crowned-list" ? style.active : ""}>
								<Image width={100} height={100} src={IconCrowned} alt="" />
								Crowned List
							</Link>
						</li>
						<li>
							<Link href="/user/team" className={router.pathname === "/user/team" ? style.active : ""}>
								<Image width={100} height={100} src={IconTeam} alt="" />
								Team
							</Link>
						</li>
						<li>
							<Link href="/user/settings" className={router.pathname === "/user/settings" ? style.active : ""}>
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
