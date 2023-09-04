import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"

export default function PopupAddNewClient(props) {
	const { closePopupHandle } = props
	const [fieldset, setFieldset] = useState("AddNewClients")
	return (
		<>
			<div id={style.add_new_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={closePopupHandle}></button>
								<form action="" method="post">
									{fieldset === "AddNewClients" ? (
										<>
											<fieldset>
												<h3 className="mb-5">Add New Clients</h3>
												<div className="row">
													<div className="col-sm-12">
														<div className={style.lbl_btn}>
															<input type="checkbox" name="confirm_term" id="as_lead" />
															<label htmlFor="as_lead">
																<span>Forward as a lead</span>
															</label>
														</div>
													</div>
													<div className="col-sm-12">
														<div className={style.lbl_btn}>
															<input type="checkbox" name="confirm_term" id="complete_app" />
															<label htmlFor="complete_app">
																<span className="small">Complete Application Submission</span> <br /> <span className="h6 fw_400 opacity-75">*if the application is not completed it will be deleted automatically after 10days.</span>
															</label>
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-end mt-5`}>
													<button type="button" className={style.site_btn} onClick={() => setFieldset("ForwardLead")}>
														Next
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "ForwardLead" ? (
										<>
											<fieldset>
												<h3 className="mb-5">Forward as a Lead</h3>
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
												</div>
												<div className={`${style.btn_blk} justify-content-end mt-5`}>
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
