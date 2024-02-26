import reflex as rx
import datetime
from python_web.styles.styles import Size as Size
from python_web.styles.styles import Spacing as Spacing
from python_web.styles.styles import TextColor as TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.text(
            f"PGS © {datetime.date.today().year} Reflex Inc.",
            font_size=Size.MEDIUM.value,
            color=TextColor.FOOTER.value,
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        padding_x=Size.BIG.value,
        spacing=Spacing.DEFAULT.value,
    )
