import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CheckCircleIcon } from "./images"

export default function PopupTargetCall(props) {
	const { closePopupHandle } = props
	const [active, setActive] = useState(false)
	const [fieldset, setFieldset] = useState("TargetCall")
	return (
		<>
			<div id={style.target_call_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={closePopupHandle}></button>
								<form action="" method="post">
									{fieldset === "TargetCall" ? (
										<>
											<fieldset>
												<h3 className="mb-5">Jesse Torres</h3>
												<div className="row">
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Call Status</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Interest Level</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Sale Status</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Customer Plan</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Payment Type</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Potential Sale</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Remarks</h6>
															<input type="text" name="" id="" className={style.input} placeholder="" />
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>From where they hear about crown credit pro</h6>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
																<option value="">Option 01</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<button type="button" className={`${style.select_btn} w-100`} onClick={() => setFieldset("NotInterested")}>
															<Image width={60} height={60} src={CheckCircleIcon} alt="" />
															Not Interested
														</button>
													</div>
													<div className="col-sm-6">
														<button type="button" className={`${style.select_btn} w-100`}>
															<Image width={60} height={60} src={CheckCircleIcon} alt="" />
															Interested
														</button>
													</div>
												</div>
											</fieldset>
										</>
									) : fieldset === "NotInterested" ? (
										<>
											<fieldset>
												<h3 className="mb-5">Not Interested</h3>
												<div className="row">
													<div className="col-sm-12">
														<div className={style.form_blk}>
															<h6>Reason</h6>
															<textarea name="" id="" rows={6} className={style.input} placeholder=""></textarea>
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Due Date</h6>
															<input type="date" name="" id="" className={style.input} placeholder="" />
														</div>
													</div>
													<div className="col-sm-6">
														<div className={style.form_blk}>
															<h6>Date</h6>
															<input type="date" name="" id="" className={style.input} placeholder="" />
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-end mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.light}`} onClick={() => setFieldset("TargetCall")}>
														Back
													</button>
													<button type="button" className={style.site_btn}>
														Submit
													</button>
												</div>
											</fieldset>
										</>
									) : null}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
