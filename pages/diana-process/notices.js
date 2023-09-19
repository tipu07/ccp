import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import DianaProcessHeader from "@/components/dianaProcessHeader"
import DianaProcessSidebar from "@/components/dianaProcessSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<DianaProcessSidebar isActive={toggle} />
				<div id={style.main_area}>
					<DianaProcessHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
