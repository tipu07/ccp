import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PlayIcon, ProfessionalWoman } from "@/components/images"

export default function FormPoliciesProcedures(props) {
	const { onFieldset } = props
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.heading}>CCP Notice</div>
					<div className={style.ccp_notice}>
						<p>CROWN CREDIT PRO NOTICE</p>
						<br />
						<p>WELCOME TO THE CROWN CREDIT PRO FAMILY, YOU HAVE FINALLY TAKEN THAT STEP TO FIX YOUR CREDIT AND TAKE CONTROL OF YOUR LIFE. WE ARE GRATEFUL FOR YOUR TRUST IN US, WE ASSURE YOU THAT WE WILL GIVE OUR-BEST.</p>
						<br />
						<p>FOR US IT&#39;S IMPORTANT OUR CUSTOMERS ARE INFORMED ABOUT OUR PROCESS, THAT IS WHY WE CREATED A NOTICE WITH OUR POLICES, RECOMMENDATIONS AND-ADDITIONAL INFORMATION.</p>
						<br />
						<p>LET’S BEGIN</p>
						<br />
						<p>HAVING A GOOD CREDIT IS A GOAL FOR MANY OF US, OFTEN BECAUSE OUR CREDITS REPORTS AND CREDIT SCORES ARE HIGHLY INFLUENTIAL TO FINANCIAL DECISIONS THAT IMPACT OUR LIVES. AND IT BECOMES MORE CRUCIAL WHEN IT HAS A NEGATIVE IMPACT.</p>
						<br />
						<p>WE ARE ABLE TO HELP YOU TO IMPROVE YOUR CREDIT SCORE AS OUR SERVICES ARE DESIGNED TO REMOVE INACCURATE OR UNVERIFIABLE INFORMATION FROM YOUR CREDIT REPORT, CREATING A MORE FAVORABLE INFLUENCE ON YOUR CREDIT LIFE.</p>
						<br />
						<p>WE WANT TO LET YOU KNOW THAT WE ARE RESPONSIBLE FOR AND GUARANTEE THE REMOVAL OF 80% TO 100% OF THE NEGATIVE ACCOUNTS, IT MEANS ANYTHING THAT HAS BEEN LATE OR IN A NEGATIVE STANDING AS LATE PAYMENTS, CHARGE OFFS, REPOSSESSIONS, BANKRUPTCY, HARD INQUIRIES AND STUDENT LOANS.</p>
						<br />
						<p>KEEP IN MIND, YOU ARE STILL RESPONSIBLE FOR THIS DEBT, IT’S ONLY REMOVED FROM YOUR CREDIT PROFILE FOR YOU TO BUILD AND ACHIEVE GREAT CREDIT. </p>
						<br />
						<p>REMEMBER WE OFFER A SERVICE THAT NOONE CAN OFFER, HOWEVER, WE NEED YOUR HELP TO ACHIEVE THE BEST RESULTS, THAT IS WHY WE HAVE LISTED SOME NECESSARY RECOMMENDATIONS THAT WE HOPE YOU WILL FOLLOW, LET’S NOT FORGET THAT THESE RECOMMENDATIONS ARE SUBJECT TO THE 90 BUSINESS DAY GUARANTEE.</p>
						<br />
						<p>1. WE RECOMMEND YOU REDUCE ALL INTERACTION WITH YOUR CREDITOR TO AVOID TAKING ANY ACTION ON THE NEGATIVE ACCOUNTS WE ARE TRYING TO REMOVE FROM YOUR CREDIT REPORT.</p>
						<br />
						<p>
							2. WE PREFER THAT WHILE THE DISPUTE PROCESS IS ACTIVE YOU AVOID APPLYING FOR NEW CREDIT. WE WILL ADVISE YOU ON THE RIGHT TIME TO TAKE THIS ACTION OR DECISION. <br /> IF YOU STILL DECIDE TO TAKE THIS STEP AND ACQUIRE A NEW INQUIRY, WE WILL CHARGE 20 DOLLARS PER INQUIRY / PER BUREAU.
						</p>
						<br />
						<p>3. WE NEED CONTINUOUS ACCESS TO YOUR CREDIT REPORT, THAT IS WHY WE ASK YOU NOT TO CHANGE THE PASSWORD AT ANY TIME. HOWEVER, IF FOR ANY REASON YOU MUST CHANGE IT, PLEASE NOTIFY US AS SOON AS POSSIBLE OTHERWISE WE CANNOT WORK ON THE FILE UNTIL WE </p>
						<br />
						<p>4. UNFORTUNATELY WE CANNOT TAKE ACTION ON THE AGE OF YOUR CREDIT PROFILE, THE ACCOUNTS WITH HIGH CREDIT USAGE, AND THE NUMBER OF ACCOUNTS REPORTING YOUR CREDIT PROFILE.THOSE ARE THINGS THAT MUST BE RESOLVED VIA AUTHORIZED USER AND PRIMARY ACCOUNTS</p>
						<br />
						<p>YOU CAN ALSO TAKE STEPS TO BUILD YOUR CREDIT IN THE LONG TERM, FOR EXAMPLE</p>
						<ol>
							<li>MAKE EVERY EFFORT TO PREVENT LATE PAYMENTS </li>
							<li> TRY TO STAY WITHIN 30% OF YOUR CREDIT LIMIT</li>
							<li> TO PREVENT UNNECESSARY HARD CREDIT INQUIRIES, AVOID APPLYING FOR NEW CREDIT UNLESS ITS ABSOLUTELY NECESSARY.</li>
						</ol>
					</div>
					<p>&nbsp;</p>
					<div className="row">
						<div className="col-sm-9">
							<div className={`${style.vid_blk} mb-5`} style={{ backgroundImage: "url(" + ProfessionalWoman.src + ")" }}>
								<button type="button">
									<Image width={200} height={200} src={PlayIcon} alt="" />
								</button>
							</div>
							<h5>Watch completed video to understand what we do</h5>
							<p className="h5 fw_500 opacity-50">2:36mins</p>
						</div>
						<div className="col-sm-6">
							<div className={style.form_blk}>
								<h6>Enter Your Name</h6>
								<input type="text" name="" id="" className={style.input} placeholder="" />
							</div>
						</div>
					</div>
					<p>&nbsp;</p>
					<h4>Client Signature</h4>
					<p className="h6 fw_400">Please sign your application with a mouse or upload signature</p>
					<div className="row">
						<div className="col-sm-4">
							<div className={style.form_blk}>
								<div className={style.upload_blk}></div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className={style.form_blk}>
								<div className={style.upload_blk}>
									<p>Drop your file here or upload manually</p>
									<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className={style.lbl_btn}>
								<input type="checkbox" name="confirm_term" id="confirm_term" />
								<label htmlFor="confirm_term">
									<span className="small">By entering name, my signature and clicking submit below,</span> <br /> <span className="h5">I confirm that I have read, understand and have agreed to all terms.</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className={`${style.btn_blk} justify-content-end mt-5`}>
					<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
						Cancel
					</button>
					<button type="button" className={style.site_btn} onClick={() => onFieldset()}>
						Next
					</button>
				</div>
			</fieldset>
		</>
	)
}
