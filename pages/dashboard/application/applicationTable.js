import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconChevRight, IconDownload, IconEdit } from "@/components/images"

export default function ApplicationTable() {
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
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Joined on</th>
								<th className="text-center">Submitted on</th>
								<th>Draft on</th>
								<th className="text-center">Status</th>
								<th style={{ width: "10rem" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.green}`}>Submitted</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.orange}`}>Review</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.blue}`}>On Hold</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>CP15627</td>
								<td>Leonardo Davinci</td>
								<td>Leo123456@gmail.com</td>
								<td>123-456-7893</td>
								<td>02 June 2023</td>
								<td className="text-center">-</td>
								<td>07 June 2023</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Rejected</span>
								</td>
								<td>
									<div className={style.action_btn}>
										<button type="button">
											View Details <Image width={100} height={100} src={IconChevRight} alt="" />
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
