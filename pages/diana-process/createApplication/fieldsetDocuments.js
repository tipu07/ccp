import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownloadCircle, IconHelp, IconShield } from "@/components/images"

export default function FieldsetDocuments() {
	return (
		<>
			<div className={style.documents}>
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>Social Security Number</h5>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<div className={`${style.input} ${style.input_icon}`}>
									<Image width={100} height={100} src={IconShield} alt="" />
									<input type="text" name="" id="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-3 align-self-center">
						<h5 className={style.icon_heading}>
							Upload DL/ID Card <Image width={100} height={100} src={IconHelp} alt="" />
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
							Upload Bankcurrupcy Pic <Image width={100} height={100} src={IconHelp} alt="" />
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
							Proof Of Address <Image width={100} height={100} src={IconHelp} alt="" />
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
