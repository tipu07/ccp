import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import RefundPolicyDetail from "./refundPolicy/refundPolicyDetail"

export default function RefundPolicy() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.refund_policy}>
				<DashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<DashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Refund Policy" />
					<RefundPolicyDetail />
				</div>
			</section>
		</>
	)
}
