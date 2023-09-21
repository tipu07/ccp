import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconChevRight } from "@/components/images"

export default function InvoicesTable() {
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
								<th>Client</th>
								<th>Created Date</th>
								<th>Pending Amount</th>
								<th>Paid Amount</th>
								<th className="text-center">Status</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
								<td>Leonardo Davinci</td>
								<td>02 June 2023</td>
								<td>$600</td>
								<td>$200</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
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
