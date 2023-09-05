import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import InstalmentBookDetail from "./instalmentBook/instalmentBookDetail"

export default function InstalmentBook() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<DashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<DashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Instalment Book" />
					<InstalmentBookDetail />
				</div>
			</section>
		</>
	)
}
