import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function Score() {
	return (
		<>
			<div id={style.score}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.column}>
							<form action="" method="post">
								<h2 className="text-center mb-5 pb-4">Get Started Now!!</h2>
								<div className="row">
									<div className="col-md-6">
										<div className={style.form_blk}>
											<h6>First Name</h6>
											<input type="text" name="" id="" className={style.input} placeholder="John" />
										</div>
									</div>
									<div className="col-md-6">
										<div className={style.form_blk}>
											<h6>Last Name</h6>
											<input type="text" name="" id="" className={style.input} placeholder="Wick" />
										</div>
									</div>
									<div className="col-md-12">
										<div className={style.form_blk}>
											<h6>Email</h6>
											<input type="text" name="" id="" className={style.input} placeholder="Enter email address" />
										</div>
									</div>
									<div className="col-4">
										<div className={style.form_blk}>
											<h6>Code</h6>
											<select name="" id="" className={style.input}>
												<option value="">+44</option>
												<option value="">+61</option>
												<option value="">+1</option>
												<option value="">+92</option>
												<option value="">+40</option>
											</select>
										</div>
									</div>
									<div className="col-8">
										<div className={style.form_blk}>
											<h6>Phone Number</h6>
											<input type="text" name="" id="" className={style.input} placeholder="00000 - 00000" />
										</div>
									</div>
								</div>
								<div className={`${style.btn_blk} pt-4 my-5`}>
									<button type="submit" className={`${style.site_btn} w-100`}>
										Get Started
									</button>
								</div>
								<div className={`${style.txt} text-center`}>
									<p>Don&ldquo;t worry, this is secure and won&ldquo;t hurt your credit score.</p>
									<p className="small mt-5 p-0">
										By clicking &quot;Submit&quot; I agree by electronic signature to: (1) be contacted by Crowncreditpro about credit repair or credit repair marketing by a live agent, artificial or prerecorded voice, and SMS text at my residential or cellular number, dialed manually or by autodialer even if my phone number is on a do-not-call registry, and by email (consent to be contacted is not a condition to purchase services); and (2) the <Link href="/production/privacy">Privacy Policy</Link> and <Link href="/production/terms">Terms of Use</Link> (including this arbitration provision ).
									</p>
								</div>
							</form>
						</div>
						<div className={style.column}>
							<div className={style.content}>
								<h2>A+ Credit Score</h2>
								<p>
									With an A+ credit score, you unlock the door to lower interest rates and reduced finance charges on your loans and credit card balances. <br />
									Sign up today and witness the difference within 120 business days or less.
								</p>
								<div className={`${style.btn_blk} mt-5`}>
									<Link href="?" className={`${style.site_btn} ${style.transparent} ${style.stroke}`}>
										Free Consultation
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
