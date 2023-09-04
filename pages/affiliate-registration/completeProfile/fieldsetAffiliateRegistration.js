import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FieldsetAffiliateRegistration() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>New Affiliate Registration</div>
				<div className="row">
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>First Name</h6>
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
							<h6>Phone Number</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Date of Birth</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Email</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Confirm Email</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Password</h6>
							<input type="password" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Confirm Password</h6>
							<input type="password" name="" id="" className={style.input} placeholder="" />
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
							<h6>Address 02</h6>
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
							<h6>State/Province</h6>
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
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Postcode/Zip</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
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
		</>
	)
}
