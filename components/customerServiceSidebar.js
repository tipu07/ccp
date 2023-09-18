import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconDashboard, IconNotice, IconNotices2, IconPhoneCircle, IconRequest, IconUpdate, PhotoUser_07 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function CustomerServiceSidebar(props) {
	const { isActive } = props
	const router = useRouter()
	return (
		<>
			<div id={style.sidebar} className={`${isActive ? style.active : ""}`}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_07} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Diana Lady</div>
						<span className={style.type}>Customer Service</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/customer-service" className={router.pathname === "/customer-service" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/customer-service/application" className={router.pathname === "/customer-service/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/customer-service/done-files" className={router.pathname === "/customer-service/done-files" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotice} alt="" />
								Done Files
							</Link>
						</li>
						<li>
							<Link href="/customer-service/updates" className={router.pathname === "/customer-service/updates" ? style.active : ""}>
								<Image width={100} height={100} src={IconUpdate} alt="" />
								Updates
							</Link>
						</li>
						<li>
							<Link href="/customer-service/notices" className={router.pathname === "/customer-service/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/customer-service/calls" className={router.pathname === "/customer-service/calls" ? style.active : ""}>
								<Image width={100} height={100} src={IconPhoneCircle} alt="" />
								Calls
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
