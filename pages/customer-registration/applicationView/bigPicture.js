import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CrownIcon, EquifaxImage, ExperianImage, TransUnionImage } from "@/components/images"

export default function BigPicture() {
	const [picView, setPicView] = useState("TransUnion")
	return (
		<>
			<div className="row">
				<div className="col-lg-9">
					<div className={style.logo_list}>
						<button type="button" className={picView === "TransUnion" ? style.active : ""} onClick={() => setPicView("TransUnion")}>
							<Image width={300} height={100} src={TransUnionImage} alt="" />
						</button>
						<button type="button" className={picView === "Experian" ? style.active : ""} onClick={() => setPicView("Experian")}>
							<Image width={300} height={100} src={ExperianImage} alt="" />
						</button>
						<button type="button" className={picView === "Equifax" ? style.active : ""} onClick={() => setPicView("Equifax")}>
							<Image width={300} height={100} src={EquifaxImage} alt="" />
						</button>
					</div>
					<div className="row flex_row">
						<div className="col-md-12">
							{picView === "TransUnion" ? (
								<>
									<div className={style.sm_blk}>
										<h3>
											TransUnion <small>Total Dispute : 20</small>
										</h3>
										<div className={style.progress_blk}>
											<div className={style.cnt}>
												<p>
													Dispute Resolved : <span>10</span>
												</p>
												<div className={style.ico}>
													<Image width={100} height={60} src={CrownIcon} alt="" />
												</div>
											</div>
											<div className={style.bar}>
												<div style={{ width: "50%" }}></div>
											</div>
										</div>
									</div>
								</>
							) : picView === "Experian" ? (
								<>
									<div className={style.sm_blk}>
										<h3>
											Experian <small>Total Dispute : 20</small>
										</h3>
										<div className={style.progress_blk}>
											<div className={style.cnt}>
												<p>
													Dispute Resolved : <span>10</span>
												</p>
												<div className={style.ico}>
													<Image width={100} height={60} src={CrownIcon} alt="" />
												</div>
											</div>
											<div className={style.bar}>
												<div style={{ width: "30%" }}></div>
											</div>
										</div>
									</div>
								</>
							) : picView === "Equifax" ? (
								<>
									<div className={style.sm_blk}>
										<h3>
											Equifax <small>Total Dispute : 20</small>
										</h3>
										<div className={style.progress_blk}>
											<div className={style.cnt}>
												<p>
													Dispute Resolved : <span>10</span>
												</p>
												<div className={style.ico}>
													<Image width={100} height={60} src={CrownIcon} alt="" />
												</div>
											</div>
											<div className={style.bar}>
												<div style={{ width: "80%" }}></div>
											</div>
										</div>
									</div>
								</>
							) : null}
						</div>
						<div className="col-md-6">
							<div className={style.sm_blk}>
								<h4>Name</h4>
								<p>1. YOLONDA CASTRO</p>
								<p>2. CASTRO,YOLONDA,YVETTE</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className={style.sm_blk}>
								<h4>ADDRESSES</h4>
								<p>1. 1637 PROSPECT PL LOCUST GROVE, GA 30248-3460</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className={style.sm_blk}>
								<h4>ACCOUNTS</h4>
								<div className={style.address_table_wrap}>
									<table className={style.address_table}>
										<tbody>
											<tr>
												<td>
													<small>Type</small>
													<br /> ECMC
												</td>
												<td>
													<small>Date opened</small>
													<br /> Sep. 14, 2017
												</td>
												<td>
													<small>Balance</small>
													<br /> $88795
												</td>
												<td>
													<small>Loan Type</small>
													<br /> Education Loan
												</td>
											</tr>
											<tr>
												<td>
													<small>Type</small>
													<br /> ECMC
												</td>
												<td>
													<small>Date opened</small>
													<br /> Sep. 14, 2017
												</td>
												<td>
													<small>Balance</small>
													<br /> $88795
												</td>
												<td>
													<small>Loan Type</small>
													<br /> Education Loan
												</td>
											</tr>
											<tr>
												<td>
													<small>Type</small>
													<br /> ECMC
												</td>
												<td>
													<small>Date opened</small>
													<br /> Sep. 14, 2017
												</td>
												<td>
													<small>Balance</small>
													<br /> $88795
												</td>
												<td>
													<small>Loan Type</small>
													<br /> Education Loan
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className={style.sm_blk}>
								<h4>HARD INQUIRIES</h4>
								<div className="row flex_row">
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												UCS/HOMESTAR FINANCIAL <br />
												<small>Jan. 25, 2022</small>
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												NAVY FCU <br />
												<small>Jan. 25, 2022</small>
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												MISSION LANE TAB BANK <br />
												<small>Sep. 17, 2021</small>
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												NAVY FCU <br />
												<small>Jun. 22, 2021</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className={style.sm_blk}>
								<h4>PUBLIC RECORD</h4>
								<div className="row flex_row">
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												Chapter 13 Bankruptcy <br />
												<small>Date filed Jan. 30, 2019</small>
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className={style.sm_blk}>
											<p>
												Chapter 7 Bankruptcy <br />
												<small>Date filed Dec. 06, 2019</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
