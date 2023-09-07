import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit2, IconEye } from "@/components/images"

export default function SalesTeamTable() {
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
								<th>CRM ID</th>
								<th>Date</th>
								<th>Client Name</th>
								<th>Phone</th>
								<th>Call Status</th>
								<th className="text-center">Sales Status</th>
								<th>Payment type</th>
								<th>Potential Sale</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Completed</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Sep 04, 2021</td>
								<td>Leonardo Davinci</td>
								<td>6206750254</td>
								<td className="text-center">-</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
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
