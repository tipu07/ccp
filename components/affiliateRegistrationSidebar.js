import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconClient, IconCreditCard, IconDashboard, IconEnvelope, IconNotices, IconPayouts, IconPlus, IconRequest, IconReward, IconUser2, PhotoUser_01 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function AffiliateRegistrationSidebar(props) {
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
							<Link href="/affiliate-registration/complete-profile" className={router.pathname === "/affiliate-registration/complete-profile" ? style.active : ""}>
								<Image width={100} height={100} src={IconUser2} alt="" />
								Complete Profile
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration" className={router.pathname === "/affiliate-registration" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/my-payouts" className={router.pathname === "/affiliate-registration/my-payouts" ? style.active : ""}>
								<Image width={100} height={100} src={IconPayouts} alt="" />
								My Payouts
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/clients" className={router.pathname === "/affiliate-registration/clients" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Clients
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/notices" className={router.pathname === "/affiliate-registration/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/withdraw-request" className={router.pathname === "/affiliate-registration/withdraw-request" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Withdraw Request
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/membership-card" className={router.pathname === "/affiliate-registration/membership-card" ? style.active : ""}>
								<Image width={100} height={100} src={IconCreditCard} alt="" />
								Membership Card
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/my-reward-points" className={router.pathname === "/affiliate-registration/my-reward-points" ? style.active : ""}>
								<Image width={100} height={100} src={IconReward} alt="" />
								My Reward Points
							</Link>
						</li>
						<li>
							<Link href="/affiliate-registration/team-chat" className={router.pathname === "/affiliate-registration/team-chat" ? style.active : ""}>
								<Image width={100} height={100} src={IconEnvelope} alt="" />
								Team Chat
							</Link>
						</li>
					</ul>
					<div className={`${style.btn_blk} mt-4`}>
						<a href="?" className={`${style.site_btn} ${style.transparent} ${style.stroke}`}>
							<Image width={100} height={100} src={IconPlus} alt="" />
							Add New Affiliate
						</a>
					</div>
				</div>
				<p>
					© 2022CrownCreditPro <span>© Copyright</span>
				</p>
			</div>
		</>
	)
}
