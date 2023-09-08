import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function PopupAddNewNotice(props) {
	const { closePopupHandle } = props
	return (
		<>
			<div id={style.add_new_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={closePopupHandle}></button>
								<form action="" method="post">
									<h3 className="mb-5">Add New Notice</h3>
									<div className="row">
										<div className="col-sm-12">
											<div className={style.form_blk}>
												<h6>Title</h6>
												<input type="text" name="" id="" className={style.input} placeholder="" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<h6>Recipient</h6>
												<select name="" id="" className={style.input}>
													<option value="">Sales, CS</option>
													<option value="">Sales, CS</option>
													<option value="">Sales, CS</option>
													<option value="">Sales, CS</option>
													<option value="">Sales, CS</option>
												</select>
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<h6>Select Customer</h6>
												<select name="" id="" className={style.input}>
													<option value="">John Wick</option>
													<option value="">John Wick</option>
													<option value="">John Wick</option>
													<option value="">John Wick</option>
													<option value="">John Wick</option>
												</select>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.form_blk}>
												<h6>Body</h6>
												<textarea name="" id="" rows={5} className={style.input} placeholder=""></textarea>
											</div>
										</div>
									</div>
									<div className={`${style.btn_blk} justify-content-end mt-5`}>
										<button type="button" className={style.site_btn}>
											Create Notice
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
