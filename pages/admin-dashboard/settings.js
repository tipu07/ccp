import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminDashboardHeader from "@/components/adminDashboardHeader"
import AdminDashboardSidebar from "@/components/adminDashboardSidebar"
import SettingsDetail from "./settings/settingsDetail"

export default function Settings() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.settings}>
				<AdminDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Settings" />
					<SettingsDetail />
				</div>
			</section>
		</>
	)
}
