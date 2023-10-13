import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminFlowHeader from "@/components/adminFlowHeader"
import AdminFlowSidebar from "@/components/adminFlowSidebar"
import PaymentRefundDetail from "./paymentRefund/paymentRefundDetail"

export default function PaymentMethod() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<AdminFlowSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminFlowHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Payment Refund" />
					<PaymentRefundDetail />
				</div>
			</section>
		</>
	)
}
