import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoUser_01 } from "@/components/images"

export default function CommissionTable() {
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
								<th>Name</th>
								<th>Affiliate ID</th>
								<th>Zelle ID</th>
								<th>Venmo ID</th>
								<th>Customer Referrals</th>
								<th>Commission to pay</th>
								<th>Commission Paid</th>
								<th>Total Commission</th>
								<th style={{ width: "10rem" }}></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>blueladybug463</td>
								<td>2</td>
								<td>$490.51</td>
								<td>$600.51</td>
								<td>$200.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
