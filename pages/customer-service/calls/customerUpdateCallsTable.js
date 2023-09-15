import React from "react"
import style from "@/styles/scss/web.module.scss"
import RatingStars from "@/components/ratingStars"

export default function CustomerUpdateCallsTable() {
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
								<th>Interest Level</th>
								<th>Status</th>
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Completed</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">Interested</option>
											<option value="">Not Interested</option>
										</select>
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.blue}`}>Need paper work</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.green}`}>Ready to close</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.red}`}>Police Report</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
								<td>
									<RatingStars value={4} />
								</td>
								<td>
									<span className={`${style.status} ${style.orange}`}>Pending</span>
								</td>
								<td>Credit Card</td>
								<td>$1000</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.sm} w-100`}>
											Call
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
