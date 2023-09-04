import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function PaymentsRequestTable() {
	return (
		<>
			<div className={style.table_blk_wrapper}>
				<div className={style.table_blk}>
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Reason</th>
								<th>Amount</th>
								<th>Remark</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Sep 23, 2021</td>
								<td>New Item Added</td>
								<td>$499</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>Any Reason come here</td>
								<td>$2000</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>New Item Added</td>
								<td>$499</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>Any Reason come here</td>
								<td>$2000</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>New Item Added</td>
								<td>$499</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>Any Reason come here</td>
								<td>$2000</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>New Item Added</td>
								<td>$499</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>Any Reason come here</td>
								<td>$2000</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>New Item Added</td>
								<td>$499</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Sep 23, 2021</td>
								<td>Any Reason come here</td>
								<td>$2000</td>
								<td>Payment Remark come here</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
