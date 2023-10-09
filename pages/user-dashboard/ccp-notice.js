import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserDashboardHeader from "@/components/userDashboardHeader"
import UserDashboardSidebar from "@/components/userDashboardSidebar"
import CcpNoticeDetail from "./ccpNotice/ccpNoticeDetail"

export default function CcpNotice() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.refund_policy}>
				<UserDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="CCP Notice" />
					<CcpNoticeDetail />
				</div>
			</section>
		</>
	)
}
