import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { LetterPhoto } from "@/components/images"

export default function FieldsetDocuments() {
	return (
		<>
			<div className={style.view_documents}>
				<div className="row">
					<div className="col-md-3 col-sm-4">
						<div className={style.todo_list}>
							<div className={style.todo_list_item}>
								<div className={`${style.todo_list_title} ${style.active}`}>Letters</div>
								<div className={style.todo_list_data}>
									<ul>
										<li>
											<button type="button" className={style.active}>
												Letter to Equifax
											</button>
										</li>
										<li>
											<button type="button">Letter to Experiean</button>
										</li>
										<li>
											<button type="button">Letter to Transunion</button>
										</li>
									</ul>
								</div>
							</div>
							<div className={style.todo_list_item}>
								<div className={style.todo_list_title}>FTC Reports</div>
								<div className={style.todo_list_data}>
									<ul>
										<li>
											<button type="button">Report 1</button>
										</li>
										<li>
											<button type="button">Report 2</button>
										</li>
										<li>
											<button type="button">Report 3</button>
										</li>
									</ul>
								</div>
							</div>
							<div className={style.todo_list_item}>
								<div className={style.todo_list_title}>Others</div>
								<div className={style.todo_list_data}>
									<ul>
										<li>
											<button type="button">ID</button>
										</li>
										<li>
											<button type="button">Police Report</button>
										</li>
										<li>
											<button type="button">Social Security Card</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-9 col-sm-8">
						<div className={`${style.title} d-flex align-items-center justify-content-between mb-4`}>
							<span>Letter to Equifax (sample)</span>
							<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
								Create Issue
							</button>
						</div>
						<div className={style.letter}>
							<Image width={1000} height={1200} src={LetterPhoto} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
