import React from "react"
import style from "@/styles/scss/web.module.scss"
import Pagination from "./pagination"
import Image from "next/image"
import { IconChevLeftDouble, IconChevLeftSingle, IconChevRightDouble, IconChevRightSingle } from "./images"

export default function TablePagination() {
	return (
		<>
			<div className={style.table_pagination}>
				<p>Page 1 of 4</p>
				<ul className={style.page_list}>
					<li>
						<span>
							<Image width={100} height={100} src={IconChevLeftDouble} alt="" />
						</span>
					</li>
					<li>
						<span>
							<Image width={100} height={100} src={IconChevLeftSingle} alt="" />
						</span>
					</li>
					<li>
						<button type="button" className={style.active}>
							1
						</button>
					</li>
					<li>
						<button type="button">2</button>
					</li>
					<li>
						<button type="button">3</button>
					</li>
					<li>
						<button type="button">4</button>
					</li>
					<li>
						<button type="button">...</button>
					</li>
					<li>
						<span>
							<Image width={100} height={100} src={IconChevRightSingle} alt="" />
						</span>
					</li>
					<li>
						<span>
							<Image width={100} height={100} src={IconChevRightDouble} alt="" />
						</span>
					</li>
				</ul>
				<div className={style.rows_per}>
					<span>Rows per page:</span>
					<select name="" id="">
						<option value="">10</option>
						<option value="">25</option>
						<option value="">50</option>
						<option value="">100</option>
					</select>
				</div>
			</div>
		</>
	)
}
