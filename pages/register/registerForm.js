import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "@/components/logo"
import Link from "next/link"

export default function RegisterForm() {
	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="post">
					<div className={style.log_blk}>
						<Logo />
						<div className={style.txt}>
							<h4>Hey Welcome,</h4>
							<p>Let’s get started</p>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="text" name="" id="" className={style.input} />
									<label htmlFor="">First Name</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="text" name="" id="" className={style.input} />
									<label htmlFor="">Last Name</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="text" name="" id="" className={style.input} />
									<label htmlFor="">Email ID</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="text" name="" id="" className={style.input} />
									<label htmlFor="">Phone Number</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="password" name="" id="" className={style.input} />
									<label htmlFor="">Password</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<input type="password" name="" id="" className={style.input} />
									<label htmlFor="">Confirm Password</label>
								</div>
							</div>
						</div>
						<div className={style.lbl_btn}>
							<input type="checkbox" name="agree" id="agree" />
							<label htmlFor="agree">I agree to terms and Conditions</label>
						</div>
						<div className={style.btn_blk}>
							<button type="button" className={style.site_btn}>
								Register
							</button>
						</div>
						<div className={style.already_account}>
							Already have an account? <Link href="/login">Login</Link>
						</div>
						<div className={style.affiliate_login}>
							<Link href="/login">Become Affiliate</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
