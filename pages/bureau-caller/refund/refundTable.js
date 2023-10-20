import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { MoreIcon } from "@/components/images"
import Link from "next/link"

export default function RefundTable() {
	const [dropdown, setDropdown] = useState(false)
	const dropdownHandle = () => {
		setDropdown(!dropdown)
	}
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
								<th className="text-center">Sales Status</th>
								<th>Payment type</th>
								<th>Amount</th>
								<th>Remark</th>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button" onClick={dropdownHandle}>
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
										{dropdown ? (
											<ul className={`${style.dropdown_menu} end-0`}>
												<li>
													<Link href="/admin/refund-form">View Application</Link>
												</li>
												<li>
													<span>Hold Application</span>
												</li>
												<li>
													<span>Terminate Application</span>
												</li>
												<li>
													<span>Mark it as done</span>
												</li>
												<li>
													<span>Archive</span>
												</li>
											</ul>
										) : null}
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Paid</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
								<td>Will follow up monday</td>
								<td>
									<div className={style.dropdown}>
										<div className={style.action_btn_list}>
											<button type="button">
												<Image width={100} height={100} src={MoreIcon} alt="" />
											</button>
										</div>
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
