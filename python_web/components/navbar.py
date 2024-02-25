from turtle import color
import reflex as rx
from python_web.styles.styles import Size as Size
from python_web.styles.styles import TextColor as TextColor
from python_web.styles.styles import Color as Color
import python_web.styles.styles as styles


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.text("Pablo", as_="span", color=Color.PRIMARY.value),
            rx.text("GS", as_="span", color=Color.SECONDARY.value),
            style=styles.navbar_title_style,
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
    )
