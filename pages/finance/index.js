import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import FinanceHeader from "@/components/financeHeader"
import FinanceSidebar from "@/components/financeSidebar"
import DashboardDetail from "./dashboard/dashboardDetail"

export default function Dashboard() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<FinanceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<FinanceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Dashboard" />
					<DashboardDetail />
				</div>
			</section>
		</>
	)
}
