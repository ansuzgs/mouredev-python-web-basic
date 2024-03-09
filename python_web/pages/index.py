import reflex as rx

import python_web.styles.styles as styles
import python_web.utils as utils
from python_web.components.footer import footer
from python_web.components.navbar import navbar
from python_web.routes import Route
from python_web.views.header import header
from python_web.views.index_links import index_links
from python_web.state.PageState import PageState


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta,
)
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                index_links(),
                # footer(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Size.BIG.value,
                padding=styles.Size.BIG.value,
            )
        ),
        footer(),
    )
