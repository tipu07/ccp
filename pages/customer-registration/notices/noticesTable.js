import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload, IconEdit } from "@/components/images"

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
								<th>Notices</th>
								<th>Owner</th>
								<th>Edited On</th>
								<th>Uploaded On</th>
								<th>Status</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.active}`}>
										<option value="" selected={true}>
											Active
										</option>
										<option value="">Inactive</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>Document Name 1</td>
								<td>Json</td>
								<td>Sep 23, 2021</td>
								<td>Sep 20, 2021</td>
								<td>
									<select name="" id="" className={`${style.status} ${style.inactive}`}>
										<option value="">Active</option>
										<option value="" selected={true}>
											Inactive
										</option>
									</select>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											<Image width={100} height={100} src={IconEdit} alt="" /> Edit
										</button>
										<button type="button">
											<Image width={100} height={100} src={IconDownload} alt="" /> Download
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
