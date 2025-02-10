<script setup>
defineProps({
	tableData: {
		type: Object,
		required: true,
		default() {
			return {};
		},
	},
});
</script>
<template lang="pug">
	table.table(:class="tableData.tableClass")
		caption.table__caption {{ tableData.caption }}
		slot(name="tableData")
</template>
<style lang="scss">
.table {
	margin: 8px 0;
	border-collapse: collapse;
	width: 100%;
	max-width: 100%;
	background-color: var(--color-bg-secondary);

	&__caption {
		margin: 16px 0;
		font-size: 26px;

		@media screen and (max-width: 576px) { font-size: 16px; }
	}

	thead {
		border-bottom: 1px solid var(--color-border);

		@media screen and (max-width: 576px) { display: none; }
	}

	tr {
		padding: 8px;

		@media screen and (max-width: 576px) {
			display: block;
			margin-bottom: 8px;
			border-bottom: 4px solid #ddd;
		}
	}

	th,
	td {
		padding: 16px;
	}

	td {
		border: 1px solid var(--color-border-light);

		a + a { margin-left: 8px; }
		&.center { text-align: center; }

		&.table__cell-response {
			@media screen and (max-width: 576px) {
				&::before {
					content: attr(data-title);
					display: block;
					margin-bottom: 8px;
					font-weight: bold;
					text-transform: uppercase;
				}
			}
		}

		@media screen and (max-width: 576px) {
			display: block;
			margin-bottom: 16px;
			border: none;
			padding: 0 16px;
			font-size: 14px;
			text-align: center;

			&:last-child { border-bottom: 0; }
		}
	}

	&--fixedHeight {
		td { height: 80px; }
	}

	&--equal {
		th { width: 50%; }
		td { text-align: center; }
	}

	&--equal-1 {
		th {
			&:first-child { width: 70%; }
			&:last-child { width: 30%; }
		}
	}

	&--equal-2 {
		th {
			&:first-child { width: 5%; }
			&:last-child { width: 30%; }
		}
	}

	&--equal-2-1-1 {
		th {
			&:first-child { width: 50%; }
			&:last-child { width: 25%; }
		}
	}

	&--equal-2-1-2 {
		th {
			&:first-child { width: 50%; }
			&:last-child { width: 33%; }
		}
	}

	&--equal-1-2-1 {
		th {
			text-align: center;

			&:first-child { width: 25%; }
			&:last-child { width: 25%; }
		}
	}

	&--schedule {
		margin: 16px 0;

		td {
			text-align: center;

			&:first-child,
			&:nth-child(2) { font-weight: bold; }

			&.attention { color: var(--color-error); }

			@media screen and (max-width: 576px) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 8px 0;
				padding: 0;
				font-size: 16px;

				&:first-child,
				&:nth-child(2) {
					font-weight: normal;
					text-align: left;
				}

				&:first-child { margin-top: 0; }
				&:last-child { margin-bottom: 0; }
			}
		}
	}

	@media screen and (max-width: 576px) {
		margin: 64px 0;
	}
}

</style>
