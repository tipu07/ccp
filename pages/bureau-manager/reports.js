import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import BureauManagerHeader from "@/components/bureauManagerHeader"
import BureauManagerSidebar from "@/components/bureauManagerSidebar"
import ReportsDetail from "./reports/reportsDetail"

export default function Reports() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<BureauManagerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<BureauManagerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Reports" />
					<ReportsDetail />
				</div>
			</section>
		</>
	)
}
