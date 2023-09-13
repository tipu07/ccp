import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminHeader from "@/components/adminHeader"
import AdminSidebar from "@/components/adminSidebar"
import RefundFormDetail from "./refundForm/refundFormDetail"

export default function RefundForm() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<AdminSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Refund" />
					<RefundFormDetail />
				</div>
			</section>
		</>
	)
}
