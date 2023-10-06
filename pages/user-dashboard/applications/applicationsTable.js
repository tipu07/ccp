import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit2, IconEye, IconTrash, PhotoUser_01 } from "@/components/images"

export default function ApplicationsTable() {
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
								<th>Application ID</th>
								<th>Email ID</th>
								<th>Joined On</th>
								<th>Submitted On</th>
								<th className="text-center">Status</th>
								<th style={{ width: "10rem" }}></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Approve</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Unpaid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>Paid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Unpaid</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.gray}`}>Archived</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
								<td>CP15680</td>
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.gray}`}>Archived</span>
								</td>
								<td>
									<div className={style.action_btn_list}>
										<button type="button">
											<Image width={100} height={100} src={IconEye} alt="" />
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconEdit2} alt="" />
										</button>
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
