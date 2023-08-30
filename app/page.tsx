import React from "react";
import { Container } from "../components/container";
import { Hero, HeroTitle } from "@/components/hero";
import { HeroSubtitle } from "../components/hero";
import Image from "next/image";
import image from "../public/hero.png";
export default function Homepage() {
	return (
		<div>
			<header>
				<Container>header</Container>
			</header>
			<main>
				<Container>
					<Hero>
						<HeroTitle>
							Linear is a better way
							<br />
							to build products
						</HeroTitle>
						<HeroSubtitle>
							Meet the new standard for modern software development.
							<br />
							Streamline issues, sprints, and product roadmaps.
						</HeroSubtitle>
						<Image src={image} alt="hero" width="1500" height="1500" />
					</Hero>
				</Container>
			</main>
			<footer>
				<Container>footer</Container>
			</footer>
		</div>
	);
}
