import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function InvoiceBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.invoice_blk}`}>
				<h5 className={style.subheading}>Invoices</h5>
				<div className={style.inner}>
					<span>Total Invoiced</span>
					<div className={`${style.price} ${style.blue_color}`}>$350.00</div>
				</div>
				<div className={style.inner}>
					<span>Total Paid Invoices</span>
					<div className={`${style.price} ${style.purple_color}`}>$700.00</div>
				</div>
				<div className={style.inner}>
					<span>Past Due</span>
					<div className={`${style.price} ${style.red_color}`}>$700.00</div>
				</div>
			</div>
		</>
	)
}
