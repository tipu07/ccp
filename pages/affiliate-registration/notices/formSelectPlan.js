import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function FormSelectPlan(props) {
	const { onFieldset } = props
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading}>Select Package</div>
					<div className={style.package_table}>
						<table>
							<thead>
								<tr>
									<th style={{ width: "1rem" }}></th>
									<th style={{ width: "24rem" }}>Packages</th>
									<th style={{ width: "16rem" }}>Sub Packages</th>
									<th style={{ width: "14rem" }}>Amount</th>
									<th>Details</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Complete Credit Repair</td>
									<td>Flat Fee</td>
									<td>$2000</td>
									<td>Flat fee includes complete credit repair for Equifax, Experian & Transunion</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Credit Repair Half & Half</td>
									<td>Pay Half N Half</td>
									<td>$1000 + $1000</td>
									<td>You can pay $1000 now and the other $1000 in the next 30days, But we process your file once we get full payment.</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Individual Bureau Pricing</td>
									<td></td>
									<td>$1000</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Inquiry Removal Only</td>
									<td>Flat Fee</td>
									<td>$2000</td>
									<td>$40 for Per Inquiry Per Bureau</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={`${style.btn_blk} justify-content-end mt-5`}>
					<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
						Cancel
					</button>
					<button type="button" className={style.site_btn} onClick={() => onFieldset()}>
						Next
					</button>
				</div>
			</fieldset>
		</>
	)
}
