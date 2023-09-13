import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerServiceHeader from "@/components/customerServiceHeader"
import CustomerServiceSidebar from "@/components/customerServiceSidebar"
import UpdatesDetail from "./updates/updatesDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<CustomerServiceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerServiceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Updates" />
					<UpdatesDetail />
				</div>
			</section>
		</>
	)
}
