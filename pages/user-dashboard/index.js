import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserDashboardHeader from "@/components/userDashboardHeader"
import UserDashboardSidebar from "@/components/userDashboardSidebar"
import HomeDetail from "./index/homeDetail"

export default function Home() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.user_dashboard}>
				<UserDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Home" />
					<HomeDetail />
				</div>
			</section>
		</>
	)
}
