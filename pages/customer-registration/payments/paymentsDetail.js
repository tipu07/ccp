import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"
import PaymentsMethodTable from "./paymentsMethodTable"
import PaymentsRequestTable from "./paymentsRequestTable"
import Link from "next/link"

export default function PaymentsDetail() {
	const [paymentTable, setPaymentTable] = useState("PaymentsMethod")
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<ul className={style.payment_tab}>
						<li>
							<button type="button" className={paymentTable === "PaymentsMethod" ? style.active : ""} onClick={() => setPaymentTable("PaymentsMethod")}>
								Payment Methods
							</button>
						</li>
						<li>
							<button type="button" className={paymentTable === "PaymentsRequest" ? style.active : ""} onClick={() => setPaymentTable("PaymentsRequest")}>
								Payment Request
							</button>
						</li>
					</ul>
					<div className={style.srch_blk}>
						<button type="submit">
							<Image width={100} height={100} src={IconSearch} alt="" />
						</button>
						<input type="text" name="" id="" className={style.input} placeholder="Search" />
					</div>
					<Link href="/customer-registration/add-new-payment" className={style.site_btn}>
						+ Add New Payment
					</Link>
				</div>
				{paymentTable === "PaymentsMethod" ? (
					<>
						<PaymentsMethodTable />
					</>
				) : paymentTable === "PaymentsRequest" ? (
					<>
						<PaymentsRequestTable />
					</>
				) : null}
			</div>
		</>
	)
}
