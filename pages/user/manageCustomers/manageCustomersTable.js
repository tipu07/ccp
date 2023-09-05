import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit2, IconEye, IconTrash, PhotoUser_01 } from "@/components/images"

export default function ManageCustomersTable() {
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
								<th>Password</th>
								<th>Phone</th>
								<th>Joined On</th>
								<th className="text-center">Category</th>
								<th className="text-center">Status</th>
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
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
								<td>tim.jennings@example.com</td>
								<td>blueladybug463</td>
								<td>(201) 555-0124</td>
								<td>22June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Basic</span>
								</td>
								<td>
									<div className={`${style.switch} mx-auto`}>
										<input type="checkbox" name="" id="" />
										<em></em>
									</div>
								</td>
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
