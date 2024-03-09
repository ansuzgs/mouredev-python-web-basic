from turtle import color
import reflex as rx
from python_web.styles.styles import Size as Size
from python_web.styles.styles import TextColor as TextColor
from python_web.styles.styles import Color as Color


def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.text(
            title,
            font_weight="bold",
            as_="span",
            color=Color.PRIMARY.value,
        ),
        f" {body}",
        font_size=Size.MEDIUM.value,
        color=TextColor.BODY.value,
    )
