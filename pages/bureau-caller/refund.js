import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import BureauCallerHeader from "@/components/bureauCallerHeader"
import BureauCallerSidebar from "@/components/bureauCallerSidebar"
import RefundDetail from "./refund/refundDetail"

export default function Refund() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<BureauCallerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<BureauCallerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Refund" />
					<RefundDetail />
				</div>
			</section>
		</>
	)
}
