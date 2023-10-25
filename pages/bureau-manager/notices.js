import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import BureauManagerHeader from "@/components/bureauManagerHeader"
import BureauManagerSidebar from "@/components/bureauManagerSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<BureauManagerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<BureauManagerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
