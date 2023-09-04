import React from "react"
import style from "@/styles/scss/web.module.scss"
import Slider from "react-slick"
import FolioCard from "./folioCard"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04 } from "./images"

const TESTIMONIALS = [
	{
		id: 1,
		name: "Sophia John",
		designation: "Business women",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
		image: PhotoUser_01,
	},
	{
		id: 2,
		name: "John Wick",
		designation: "Businessmen",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
		image: PhotoUser_02,
	},
	{
		id: 3,
		name: "Jennifer Kem",
		designation: "Business women",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
		image: PhotoUser_03,
	},
	{
		id: 1,
		name: "Alexander Philips",
		designation: "Businessmen",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
		image: PhotoUser_04,
	},
]

export default function FolioSlider() {
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		speed: 300,
		focusOnSelect: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<Slider {...settings} className={`${style.slick_folio} slick-folio slick-carousel`}>
			{TESTIMONIALS.map((data) => {
				return <FolioCard {...data} key={data.id} />
			})}
		</Slider>
	)
}
