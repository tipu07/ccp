import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconClient, IconDashboard, IconIssue, IconNotices2, IconRequest, PhotoUser_07 } from "./images"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ProcessVerificationSidebar(props) {
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
						<div className={style.name}>Salena Gomez</div>
						<span className={style.type}>Process Verification</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/process-verification" className={router.pathname === "/process-verification" ? style.active : ""}>
								<Image width={100} height={100} src={IconDashboard} alt="" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/process-verification/application" className={router.pathname === "/process-verification/application" ? style.active : ""}>
								<Image width={100} height={100} src={IconRequest} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/process-verification/notices" className={router.pathname === "/process-verification/notices" ? style.active : ""}>
								<Image width={100} height={100} src={IconNotices2} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/process-verification/issues" className={router.pathname === "/process-verification/issues" ? style.active : ""}>
								<Image width={100} height={100} src={IconIssue} alt="" />
								Issues
							</Link>
						</li>
						<li>
							<Link href="/process-verification/refund" className={router.pathname === "/process-verification/refund" ? style.active : ""}>
								<Image width={100} height={100} src={IconClient} alt="" />
								Refund
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
