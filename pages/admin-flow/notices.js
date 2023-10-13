import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminFlowHeader from "@/components/adminFlowHeader"
import AdminFlowSidebar from "@/components/adminFlowSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<AdminFlowSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminFlowHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
