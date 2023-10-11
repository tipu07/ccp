import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FieldsetUploadDocuments() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>Letters</div>
				<div className="row">
					<div className="w-100"></div>
					<div className="col-sm-4">
						<div className={style.form_blk}>
							<h6>Letter to Equifax</h6>
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
							<h6>Letter to Experiean</h6>
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
							<h6>Letter to Transunion</h6>
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
				<div className={style.heading}>FTC Reports</div>
				<div className="row">
					<div className="w-100"></div>
					<div className="col-sm-4">
						<div className={style.form_blk}>
							<h6>Report 1</h6>
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
							<h6>Report 2</h6>
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
							<h6>Report 3</h6>
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
				<div className={style.heading}>ID</div>
				<div className="row">
					<div className="w-100"></div>
					<div className="col-sm-4">
						<div className={style.form_blk}>
							<h6>ID</h6>
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
				<div className={style.heading}>Police Report</div>
				<div className="row">
					<div className="w-100"></div>
					<div className="col-sm-4">
						<div className={style.form_blk}>
							<h6>Police Report</h6>
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
				<div className={style.heading}>Social Security Card</div>
				<div className="row">
					<div className="w-100"></div>
					<div className="col-sm-4">
						<div className={style.form_blk}>
							<h6>Social Security Card</h6>
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
		</>
	)
}
