import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit2, IconEye } from "@/components/images"

export default function NoticesTable() {
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
								<th>Title</th>
								<th style={{ width: "46rem" }}>Body</th>
								<th>Added By</th>
								<th>Date</th>
								<th>Time</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
								<td>Notice 1</td>
								<td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </td>
								<td>Processing Department</td>
								<td>Sep 04, 2021</td>
								<td>4:00 PM</td>
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
