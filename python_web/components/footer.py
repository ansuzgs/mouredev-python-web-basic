import reflex as rx
import datetime
from python_web import constants
from python_web.styles.styles import Size as Size
from python_web.styles.styles import Spacing as Spacing
from python_web.styles.styles import TextColor as TextColor
from python_web.components.ant_components import float_button


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="favicon.ico",
            height=Size.VERY_BIG.value,
            width=Size.VERY_BIG.value,
            alt='Logotipo de Mouredev. Una "eme" entre llaves.',
        ),
        rx.link(
            rx.box(
                f"PGS © {datetime.date.today().year} Reflex Inc.",
                rx.text(
                    "MoureDev by Brais Moure",
                    as_="span",
                    color=TextColor.FOOTER.value,
                ),
                " v3.",
                padding_top=Size.DEFAULT.value,
            ),
            href=constants.REPO_URL,
            is_external=True,
            font_size=Size.MEDIUM.value,
        ),
        rx.link(
            rx.hstack(
                rx.image(
                    src="/icons/github.svg",
                    height=Size.LARGE.value,
                    width=Size.LARGE.value,
                ),
                rx.text(
                    "BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.",
                    font_size=Size.MEDIUM.value,
                    margin_top=Size.ZERO.value,
                ),
            ),
            href=constants.REPO_URL,
            is_external=True,
        ),
        float_button(
            icon=rx.image(src="/icons/donate.svg"),
            href=constants.COFFEE_URL,
        ),
        align="center",
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.VERY_BIG.value,
        padding_x=Size.BIG.value,
        spacing=Spacing.ZERO.value,
        color=TextColor.FOOTER.value,
    )
