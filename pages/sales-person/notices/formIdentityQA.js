import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function FormIdentityQA(props) {
	const { onFieldset } = props
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading}>Identity IQ Login</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>User Name</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-end mt-5`}>
						<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke} ${style.transparent}`}>
							Fetch Files
						</button>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading}>Credit Report Summary</div>
					<p className="h6 fw_400">Customer Statement</p>
					<div className={style.credit_table}>
						<table>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<th>TransUnion</th>
									<td>#HK#EFCRA EXTENDED FRAUD ALERT: ACTION MAY BE REQUIRED UNDER FCRA BEFORE OPENING OR MODIFYING AN ACCOUNT. CONTACT CONSUMER AT (334) 232-5232 (470) 441-6972</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<th>Experian</th>
									<td>06& 05-29-21 0000000 ID FRAUD VICTIM ALERT FRAUDULENT APPLICATIONS MAY BE SUBMITTED IN MY NAME OR MY IDENTITY MAY HAVE BEEN USED WITHOUT MY CONSENT TO FRAUDULENTLY OBTAIN GOODS OR SERVICES. DO NOT EXTEND CREDIT WITHOUT FIRST CONTACTING ME PERSONALLY AND VERIFYING ALL APPLICATION INFORMATION AT DAY 334- 232-5232 OR EVENING 470-441-6972. THIS VICTIM ALERT WILL BE MAINTAINED FOR SEVEN YEARS BEGINNING 05-29-21.</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<th>Equifax</th>
									<td>FTC IDENTITY THEFT REPORT WAS FAXED ON 03/09/2021</td>
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
