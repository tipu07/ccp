import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "@/components/logo"
import Link from "next/link"

export default function LoginForm() {
	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="post">
					<div className={style.log_blk}>
						<Logo />
						<div className={style.txt}>
							<h4>Hey Welcome back,</h4>
							<p>Login into your dashboard</p>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className={style.form_blk}>
									<input type="text" name="" id="" className={style.input} />
									<label htmlFor="">Email ID</label>
								</div>
							</div>
							<div className="col-sm-12 p-3"></div>
							<div className="col-sm-12">
								<div className={style.form_blk}>
									<input type="password" name="" id="" className={style.input} />
									<label htmlFor="">Password</label>
								</div>
							</div>
						</div>
						<div className={style.forgot_pass}>
							<Link href="/forgot">Forgot Password?</Link>
						</div>
						<div className={style.btn_blk}>
							<button type="button" className={style.site_btn}>
								Login
							</button>
						</div>
						<div className={style.already_account}>
							Don’t have an account yet? <Link href="/register">Register yourself</Link>
						</div>
						<div className={style.affiliate_login}>
							<Link href="/login">Affiliate Login</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
