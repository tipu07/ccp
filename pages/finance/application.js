import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import FinanceHeader from "@/components/financeHeader"
import FinanceSidebar from "@/components/financeSidebar"
import ApplicationDetail from "./application/applicationDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<FinanceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<FinanceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}
