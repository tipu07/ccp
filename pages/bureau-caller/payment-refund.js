import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import BureauCallerHeader from "@/components/bureauCallerHeader"
import BureauCallerSidebar from "@/components/bureauCallerSidebar"
import PaymentRefundDetail from "./paymentRefund/paymentRefundDetail"

export default function PaymentMethod() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<BureauCallerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<BureauCallerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Payment Refund" />
					<PaymentRefundDetail />
				</div>
			</section>
		</>
	)
}
