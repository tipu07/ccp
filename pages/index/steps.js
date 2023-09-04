import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CrownLogoIcon, JourneyPhoto } from "@/components/images"

export default function Steps() {
	return (
		<>
			<div id={style.steps}>
				<div className={style.image}>
					<Image width={1000} height={1000} src={JourneyPhoto} alt="" />
				</div>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h2>Start Your Journey to an A+ Credit Score in 4 Easy Steps</h2>
							<p>Your Journey to an A+ Credit Score</p>
						</div>
						<div className="row flex_row">
							<div className="col-md-6">
								<div className={style.inner}>
									<div className={style.ico}>
										<Image width={200} height={200} src={CrownLogoIcon} alt="" />
										<span>01</span>
									</div>
									<div className={style.txt}>
										<h4 className={style.text_prime}>Register/Application Details</h4>
										<p>Click on the Register Button and Sign Up by filling in your details under the Application Details Tab.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className={style.inner}>
									<div className={style.ico}>
										<Image width={200} height={200} src={CrownLogoIcon} alt="" />
										<span>02</span>
									</div>
									<div className={style.txt}>
										<h4 className={style.text_prime}>Agreement</h4>
										<p>Sign the Electronic Agreement giving us consent to work on your behalf.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className={style.inner}>
									<div className={style.ico}>
										<Image width={200} height={200} src={CrownLogoIcon} alt="" />
										<span>03</span>
									</div>
									<div className={style.txt}>
										<h4 className={style.text_prime}>Upload Documents</h4>
										<p>Upload the Requested Documents under the Upload Documents Tab.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className={style.inner}>
									<div className={style.ico}>
										<Image width={200} height={200} src={CrownLogoIcon} alt="" />
										<span>04</span>
									</div>
									<div className={style.txt}>
										<h4 className={style.text_prime}>Payment Details</h4>
										<p>Submit Payment Deposit of 50% via Zelle or Venmo.</p>
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
