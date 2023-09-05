import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconChevRight, IconDownload, IconEdit } from "@/components/images"

export default function InstalmentBookTable() {
	return (
		<>
			<div className={style.table_blk_wrapper}>
				<div className={style.table_blk}>
					<table>
						<thead>
							<tr>
								<th style={{ width: "1rem" }}>
									<input type="checkbox" name="" id="" />
								</th>
								<th>Amount</th>
								<th>Payment Week</th>
								<th>Payment months</th>
								<th>Installment Date</th>
								<th>Paid Date</th>
								<th className="text-center">Status</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>In Progress</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm}`}>
											Pay Now
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>$600</td>
								<td>12 Weeks</td>
								<td>6 Months</td>
								<td>02 June 2023</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Overdue</span>
								</td>
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
