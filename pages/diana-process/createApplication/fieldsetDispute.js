import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FieldsetDispute() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>Customer Statement</div>
				<div className={style.credit_table}>
					<table>
						<tbody>
							<tr>
								<th>TransUnion</th>
								<td>#HK#EFCRA EXTENDED FRAUD ALERT: ACTION MAY BE REQUIRED UNDER FCRA BEFORE OPENING OR MODIFYING AN ACCOUNT. CONTACT CONSUMER AT (334) 232-5232 (470) 441-6972</td>
								<td>
									<select name="" id="" className={style.input}>
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
			<div className={style.in_blk}>
				<div className={style.heading}>Personal Information</div>
				<div className={style.credit_table}>
					<table>
						<tbody>
							<tr>
								<th>Current Address(es)</th>
								<td>4049 1020 US Highway 231 wetumpka, Al 36093</td>
								<td>4049 1020 US Highway 231 wetumpka, Al 36093</td>
								<td>4049 1020 US Highway 231 wetumpka, Al 36093</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Employers</th>
								<td>Crownluv US Military/Marines</td>
								<td>Crownluv US Military/Marines</td>
								<td>Crownluv US Military/Marines</td>
								<td>
									<select name="" id="" className={style.input}>
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
			<div className={style.in_blk}>
				<div className={style.heading}>Risk Factor</div>
				<div className={style.credit_table}>
					<table>
						<tbody>
							<tr>
								<th>TransUnion</th>
								<td>#HK#EFCRA EXTENDED FRAUD ALERT: ACTION MAY BE REQUIRED UNDER FCRA BEFORE OPENING OR MODIFYING AN ACCOUNT. CONTACT CONSUMER AT (334) 232-5232 (470) 441-6972</td>
								<td>
									<select name="" id="" className={style.input}>
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
			<div className={style.in_blk}>
				<div className={style.heading}>Summary</div>
				<div className={style.credit_table}>
					<table>
						<tbody>
							<tr>
								<th>Balances</th>
								<td>$68,883.00</td>
								<td>$68,883.00</td>
								<td>$68,883.00</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Do Not Touch</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Payments</th>
								<td>$68,883.00</td>
								<td>$68,883.00</td>
								<td>$68,883.00</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Do Not Touch</option>
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
