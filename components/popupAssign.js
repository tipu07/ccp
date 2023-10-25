import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoUser_01 } from "./images"

export default function PopupAssign(props) {
	const { closePopupHandle } = props
	return (
		<>
			<div id={style.assign_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={closePopupHandle}></button>
								<form action="" method="post">
									<h3 className="mb-5">Assign</h3>
									<div className="row">
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.assign_blk}>
												<div className={`${style.ico} ${style.fill} ${style.round}`}>
													<Image width={200} height={200} src={PhotoUser_01} alt="" />
												</div>
												<div className={style.txt}>
													<ul>
														<li>
															<h5>Jesse Torres</h5>
															<strong>938402</strong>
														</li>
														<li>
															<strong>Phone Number</strong>
															<span>+01 923 456 78</span>
														</li>
														<li>
															<strong>Contact Date</strong>
															<span>Jun 30, 2021</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className={`${style.btn_blk} justify-content-end mt-5`}>
										<button type="button" className={style.site_btn}>
											Assign
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
