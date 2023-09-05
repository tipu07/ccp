import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconCheckCircle, IconDownloadCircle, IconHelp } from "@/components/images"

export default function FieldsetCreditReports() {
	return (
		<>
			<div className={style.credit_reports}>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Credit Karma <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
						<p className="small">It should always be reference as CreditKarma.com</p>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<h6>Username</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
							<div className="col-md-6">
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Experian <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
						<p className="small">It should always be reference as Experian.com</p>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<h6>Username</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
							<div className="col-md-6">
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Equifax <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
						<p className="small">
							It should always be reference as <u>MY.EQUIFAX.COM</u>
						</p>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<h6>Username</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
							<div className="col-md-6">
								<h6>Password</h6>
								<input type="text" name="" id="" className={style.input} />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-12">
						<h5 className={style.icon_heading}>
							Annual Credit Report <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
						<p className="small">
							Go to <u>annualcreditreport.com</u> and retrieve
						</p>
						<ul className={`${style.list} my-4`}>
							<li>
								<Image width={100} height={100} src={IconCheckCircle} alt="" />
								<span>Transunion credit report</span>
							</li>
							<li>
								<Image width={100} height={100} src={IconCheckCircle} alt="" />
								<span>Equifax credit report</span>
							</li>
							<li>
								<Image width={100} height={100} src={IconCheckCircle} alt="" />
								<span>Experian credit report</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Transunion <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_download}`}>
									<input type="text" name="" id="" />
									<button type="button" className={`${style.site_btn} ${style.simple}`}>
										<Image width={100} height={100} src={IconDownloadCircle} alt="" />
										<span>Download</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Equifax <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_download}`}>
									<input type="text" name="" id="" />
									<button type="button" className={`${style.site_btn} ${style.simple}`}>
										<Image width={100} height={100} src={IconDownloadCircle} alt="" />
										<span>Download</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Experian <Image width={100} height={100} src={IconHelp} alt="" />
						</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_download}`}>
									<input type="text" name="" id="" />
									<button type="button" className={`${style.site_btn} ${style.simple}`}>
										<Image width={100} height={100} src={IconDownloadCircle} alt="" />
										<span>Download</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
