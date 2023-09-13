import React from "react"
import style from "@/styles/scss/web.module.scss"
import RefundMainForm from "./refundMainForm"

export default function RefundFormDetail() {
	return (
		<>
			<form action="" method="post">
				<div className="row">
					<div className="col-md-9">
						<RefundMainForm />
					</div>
				</div>
			</form>
		</>
	)
}
