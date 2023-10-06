import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit2, IconEye, IconTrash, PhotoUser_01 } from "@/components/images"

export default function InstallmentBookTable() {
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
								<th>Month</th>
								<th>Payment Method</th>
								<th>Amount</th>
								<th>Status</th>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
										</button>
									</div>
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
								<td>12/06/2023</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Paid</option>
										<option value="">Unpaid</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconTrash} alt="" />
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
