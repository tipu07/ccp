import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminDashboardHeader from "@/components/adminDashboardHeader"
import AdminDashboardSidebar from "@/components/adminDashboardSidebar"
import DisputeListDetail from "./disputeList/disputeListDetail"

export default function DisputeList() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<AdminDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Dispute List" />
					<DisputeListDetail />
				</div>
			</section>
		</>
	)
}
