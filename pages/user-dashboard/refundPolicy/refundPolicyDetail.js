import React from "react"
import style from "@/styles/scss/web.module.scss"
import RefundPolicyContent from "./refundPolicyContent"

export default function RefundPolicyDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<RefundPolicyContent />
			</div>
		</>
	)
}
