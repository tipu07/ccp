import React from "react"
import style from "@/styles/scss/web.module.scss"
import WithdrawRequestBlocks from "./withdrawRequestBlocks"
import WithdrawRequestForm from "./withdrawRequestForm"

export default function WithdrawRequestDetail() {
	return (
		<>
			<div className="row">
				<div className="col-lg-9">
					<WithdrawRequestBlocks />
					<div className="py-4"></div>
					<form action="" method="post" className={style.application_form}>
						<WithdrawRequestForm />
						<div className={`${style.btn_blk} justify-content-end mt-5`}>
							<button type="button" className={style.site_btn}>
								Send Request
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
