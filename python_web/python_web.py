import reflex as rx
from python_web.components.navbar import navbar
from python_web.views.header.header import header
from python_web.views.links.links import links
from python_web.components.footer import footer
import python_web.styles.styles as styles


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                footer(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Size.BIG.value,
                padding=styles.Size.BIG.value,
            )
        ),
    )


app = rx.App(stylesheets=styles.STYLESHEETS, style=styles.BASE_STYLE)
app.add_page(index)
