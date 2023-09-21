import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockUploadIcon, IconCalendar2, IconHelp, IconMail, PhotoUser_01 } from "@/components/images"

export default function FieldsetUserDetails() {
	return (
		<>
			<div className={style.user_details}>
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Application ID</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<input type="text" name="" id="" className={style.input} placeholder="eg: CP15680" />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Joined & Submitted Date</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: 22 June 2023" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: 22 June 2023" />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Sales Agent</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: Lindsay" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: 22 June 2023" />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Name</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: John" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="eg: Wick" />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Email address</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_icon}`}>
									<Image width={100} height={100} src={IconMail} alt="" />
									<input type="text" name="" id="" className={style.input} placeholder="sample@gmail.com" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Date of Birth</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_icon}`}>
									<Image width={100} height={100} src={IconCalendar2} alt="" />
									<input type="text" name="" id="" className={style.input} placeholder="10 Nov 1962" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>
							Your photo
							<Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
						<p className="small">This will be displayed on your profile.</p>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={style.upload_file_blk_wrapper}>
									<div className={`${style.ico} ${style.fill} ${style.round}`}>
										<Image width={200} height={200} src={PhotoUser_01} alt="" />
									</div>
									<div className={style.upload_file_blk}>
										<div className={style.ico}>
											<Image width={100} height={100} src={BlockUploadIcon} alt="" />
										</div>
										<p>
											<button type="button">Click to upload</button> or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Phone Number</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_icon}`}>
									<select name="" id="">
										<option value="">US</option>
										<option value="">PK</option>
										<option value="">US</option>
										<option value="">PK</option>
										<option value="">US</option>
										<option value="">PK</option>
									</select>
									<input type="text" name="" id="" className={style.input} placeholder="eg: +1 (555) 000-0000" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Country</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<select name="" id="" className={style.input}>
									<option value="">United State</option>
									<option value="">United State</option>
									<option value="">United State</option>
									<option value="">United State</option>
									<option value="">United State</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Address</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="Line 1" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="Line 2" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="City" />
							</div>
							<div className="col-md-6">
								<input type="text" name="" id="" className={style.input} placeholder="State" />
							</div>
							<div className="col-md-8">
								<input type="text" name="" id="" className={style.input} placeholder="Zip code" />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<h5 className={style.icon_heading}>Customer Notes</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<textarea name="" id="" rows={5} className={style.input} placeholder="Type something here"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
