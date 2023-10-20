import React from "react"
import style from "@/styles/scss/web.module.scss"
import PaymentMethodForm from "./paymentMethodForm"

export default function PaymentRefundDetail() {
	return (
		<>
			<form action="" method="post">
				<div className="row">
					<div className="col-md-9">
						<PaymentMethodForm />
					</div>
				</div>
			</form>
		</>
	)
}
