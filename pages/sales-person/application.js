import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import SalesPersonHeader from "@/components/salesPersonHeader"
import SalesPersonSidebar from "@/components/salesPersonSidebar"
import ApplicationDetail from "./application/applicationDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<SalesPersonSidebar isActive={toggle} />
				<div id={style.main_area}>
					<SalesPersonHeader isActive={toggle} onToggle={toggleHandle} pageTitle="My Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}
