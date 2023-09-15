import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerServiceHeader from "@/components/customerServiceHeader"
import CustomerServiceSidebar from "@/components/customerServiceSidebar"
import CallsDetail from "./calls/callsDetail"

export default function Calls() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<CustomerServiceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerServiceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Calls" />
					<CallsDetail />
				</div>
			</section>
		</>
	)
}
