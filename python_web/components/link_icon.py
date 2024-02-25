import reflex as rx
import python_web.styles.styles as styles


def link_icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(tag="link"),
        href=url,
        is_external=True,
    )
