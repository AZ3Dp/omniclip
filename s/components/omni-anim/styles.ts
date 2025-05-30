import {css} from "@benev/slate"

export const styles = css`
	:host {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: auto;
	}

	h2 {
		display: flex;
		gap: 0.2em;

		& svg {
			width: 20px;
		}
	}

	.animations {
		display: flex;
		gap: 0.5em;
		padding: 1em;
		flex-direction: column;
		align-items: flex-start;

		& .flex {
			display: flex;
			align-items: center;
			margin: 0.5em 0;
		}

		& select {
			background: #111;
			border-radius: 5px;
			color: gray;
			padding: 0.3em;

			& option {
				background: #111;
			}
		}

		& .duration-slider {
			display: flex;
			gap: 0.3em;
			align-items: center;
		}

		& .anim-cnt {
			display: flex;
			flex-wrap: wrap;

			&[disabled] {
				pointer-events: none;
				filter: blur(5px);
				opacity: 0.5;
				filter: blur(2px);
			}
		}

		& .btn-cnt {
			display: flex;
			align-items: center;
			gap: 0.5em;

			& button {
				padding: 0.5em 1.5em;
				border-radius: 10px;
				background: #212121;
				cursor: pointer;

				&[data-selected] {
					border: 1px solid gray;
				}
			}
		}

		& .animation {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 150px;
			height: 150px;
			cursor: pointer;
			font-size: 1.5em;
			border-radius: 10px;
			margin: 1em;
			position: relative;
			border: 1px solid;

			&[data-selected] {
				color: white;
				border: 1px solid white;
			}
			
			&:hover {
				& .add-btn {
					display: flex;
				}
			}

			& .add-btn {
				margin: 0.4em;
				display: none;
				border-radius: 7px;
				position: absolute;
				bottom: 0;
				right: 0;
				cursor: pointer;

				& svg {
					width: 25px;
					height: 25px;
					opacity: 0.5;
					color: lime;

					&:hover {
						opacity: 0.7;
					}
				}
			}
		}
	}
`
