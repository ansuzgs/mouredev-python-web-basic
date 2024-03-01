import reflex as rx
import python_web.styles.styles as styles
from python_web.styles.styles import Size
from python_web.styles.styles import Spacing


def link_button(
    title: str, body: str, image: str, url: str, is_external: bool = True
) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=styles.Size.BIG.value,
                    height=styles.Size.BIG.value,
                    margin=Size.MEDIUM.value,
                ),
                rx.vstack(
                    rx.text(
                        title,
                        size=Spacing.SMALL.value,
                        style=styles.button_title_style,
                    ),
                    rx.text(
                        body,
                        size=Spacing.VERY_SMALL.value,
                        style=styles.button_body_style,
                    ),
                    align_items="start",
                    spacing=Spacing.VERY_SMALL.value,
                    padding_y=Size.SMALL.value,
                    padding_right=Size.SMALL.value,
                ),
                align_items="center",
                width="100%",
            ),
        ),
        href=url,
        is_external=is_external,
        width="100%",
    )
