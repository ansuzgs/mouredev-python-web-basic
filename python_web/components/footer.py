import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.text(f"© {datetime.date.today().year} Reflex Inc."),
    )
