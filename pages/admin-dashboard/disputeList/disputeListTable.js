import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconChevRight, IconTrash, PhotoUser_01 } from "@/components/images"

export default function DisputeListTable() {
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
								<th>Email ID</th>
								<th>Date</th>
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
								<td>tim.jennings@example.com</td>
								<td>20June 2023</td>
								<td>
									<div className={style.btn_blk}>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Go to dashboard
											<Image width={100} height={100} src={IconChevRight} alt="" />
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
