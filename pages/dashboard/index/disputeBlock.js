import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit, PhotoLogon, PhotoUser_01, PieChart, ProfessionalWoman } from "@/components/images"
import Link from "next/link"
import MainPieChart from "./mainPieChart"

export default function DisputeBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.dispute_blk}`}>
				<h5 className={style.subheading}>Dispute Status</h5>
				<div className="row">
					<div className="col-md-6">
						<div className={style.dispute_table}>
							<table>
								<thead>
									<tr>
										<th>#</th>
										<td>Equifax</td>
										<td>Experian</td>
										<td>TransUnion</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>Postive</th>
										<td>1</td>
										<td>2</td>
										<td>1</td>
									</tr>
									<tr>
										<th>Deleted</th>
										<td>0</td>
										<td>2</td>
										<td>0</td>
									</tr>
									<tr>
										<th>Repaired</th>
										<td>1</td>
										<td>2</td>
										<td>5</td>
									</tr>
									<tr>
										<th>In Dispute</th>
										<td>3</td>
										<td>2</td>
										<td>0</td>
									</tr>
									<tr>
										<th>Verified</th>
										<td>2</td>
										<td>1</td>
										<td>1</td>
									</tr>
									<tr>
										<th>Negative</th>
										<td>1</td>
										<td>1</td>
										<td>1</td>
									</tr>
									<tr>
										<th>Updated</th>
										<td>0</td>
										<td>0</td>
										<td>0</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-6">
						<div className={style.pie_chart}>
							<MainPieChart />
						</div>
						<div className={`${style.btn_blk} justify-content-between`}>
							<button type="button" className={style.mini_btn}>
								Import Credit Report
							</button>
							<button type="button" className={style.mini_btn}>
								View/Update Items
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
