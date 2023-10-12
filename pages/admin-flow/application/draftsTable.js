import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { MoreIcon } from "@/components/images"
import RatingStars from "@/components/ratingStars"

export default function DraftsTable() {
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
								<th>Call Status</th>
								<th>Interest Level</th>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
													<span>View Application</span>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
								<td>223688</td>
								<td>Sep 04, 2021</td>
								<td>Jesse Torres</td>
								<td>6206750254</td>
								<td className="text-center">
									<select name="" id="" className={style.input}>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
										<option value="Action">Action</option>
									</select>
								</td>
								<td>
									<RatingStars value={4} />
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit CardCard</td>
								<td>$1000</td>
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
