import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconPlus, IconSearch } from "@/components/images"
import NoticesTable from "./noticesTable"
import PopupAddNewNotice from "@/components/popupAddNewNotice"

export default function NoticesDetail() {
	const [addPopup, setAddPopup] = useState(false)
	const addPopupHandle = () => {
		setAddPopup(!addPopup)
	}
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={style.srch_blk}>
						<button type="submit">
							<Image width={100} height={100} src={IconSearch} alt="" />
						</button>
						<input type="text" name="" id="" className={style.input} placeholder="Search" />
					</div>
					<div className={`${style.btn_blk} ms-auto`}>
						<button className={style.site_btn} onClick={addPopupHandle}>
							<Image width={100} height={100} src={IconPlus} alt="" /> Add New Notice
						</button>
					</div>
				</div>
				<NoticesTable />
			</div>
			<TablePagination />
			{addPopup ? <PopupAddNewNotice closePopupHandle={addPopupHandle} /> : null}
		</>
	)
}
