import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import SalesManagerHeader from "@/components/salesManagerHeader"
import SalesManagerSidebar from "@/components/salesManagerSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<SalesManagerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<SalesManagerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
