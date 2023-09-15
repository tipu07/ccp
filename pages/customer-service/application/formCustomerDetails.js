import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function FormCustomerDetails(props) {
	const { onFieldset } = props
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Basic Information about customer</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
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
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Social Security</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Social Security Number</h6>
								<input type="text" name="" id="" className={style.input} placeholder="12312ASA" />
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Social Security Number Photo</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Upload DL/ID Card</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Credit Karma</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
					<div className={`${style.txt} fw_500 mb-4`}>
						<p>
							It should always be reference as <Link href="/">CreditKarma.com</Link>
						</p>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Credit Karma username</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Credit Karma password</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Credit Karma</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
					<div className={`${style.txt} fw_500 mb-4`}>
						<p>
							Go to <Link href="/">annualcreditreport.com</Link> and retrieve
						</p>
						<p className="small">
							Transunion credit report <br />
							Equifax credit report <br />
							Experian credit report
						</p>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<div className={style.form_blk}>
								<h6>Transunion credit report</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className={style.form_blk}>
								<h6>Equifax credit report</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className={style.form_blk}>
								<h6>Equifax credit report</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Equifax</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
					<div className={`${style.txt} fw_500 mb-4`}>
						<p>
							It Should always be reference as <Link href="/">Equifax.com</Link>
						</p>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Equifax username</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Equifax password</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
					</div>
				</div>
				<div className={style.in_blk}>
					<div className={style.heading_wrapper}>
						<div className={style.heading}>Experian</div>
						<div className={`${style.btn_blk} ms-5`}>
							<button type="button" className={style.read_more_btn}>
								Mark as Complete
							</button>
							<button type="button" className={style.read_more_btn}>
								Create Issue
							</button>
						</div>
					</div>
					<div className={`${style.txt} fw_500 mb-4`}>
						<p>
							It Should always be reference as <Link href="/">Equifax.com</Link>
						</p>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Equifax username</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Equifax password</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Experian Pin</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Experian Security Answer</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Upload Experian document</h6>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
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
