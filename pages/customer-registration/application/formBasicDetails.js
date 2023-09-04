import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FormBasicDetails(props) {
	const { onFieldset } = props
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading}>Office Use</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Affiliate ID</h6>
								<input type="text" name="" id="" className={style.input} placeholder="12312ASA" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Sales Person</h6>
								<select name="" id="" className={style.input}>
									<option value="">Json</option>
									<option value="">Json</option>
									<option value="">Json</option>
									<option value="">Json</option>
									<option value="">Json</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading}>Personal Information</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>First Name</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Middle Name</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Last Name</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Date of Birth</h6>
								<input type="date" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Phone Number</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Address 02</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Address 01</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>State/Province</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Country</h6>
								<select name="" id="" className={style.input}>
									<option value="">United States of America</option>
									<option value="">United States of America</option>
									<option value="">United States of America</option>
									<option value="">United States of America</option>
									<option value="">United States of America</option>
								</select>
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Postcode/Zip</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Town/City</h6>
								<select name="" id="" className={style.input}>
									<option value="">Las Vegas</option>
									<option value="">Las Vegas</option>
									<option value="">Las Vegas</option>
									<option value="">Las Vegas</option>
									<option value="">Las Vegas</option>
								</select>
							</div>
						</div>
						<div className="col-sm-12">
							<div className={style.form_blk}>
								<h6>Customer Notes</h6>
								<textarea name="" id="" rows={6} className={style.input} placeholder="Write Something"></textarea>
							</div>
						</div>
					</div>
				</div>
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
