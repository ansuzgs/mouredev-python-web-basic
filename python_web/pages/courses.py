import python_web.styles.styles as styles
import python_web.utils as utils
import reflex as rx
from python_web.components.footer import footer
from python_web.components.navbar import navbar
from python_web.routes import Route
from python_web.views.header import header
from python_web.views.courses_links import courses_links
from python_web.state.PageState import PageState


@rx.page(
    route=Route.COURSES.value,
    title=utils.cursos_title,
    description=utils.cursos_description,
    image=utils.preview,
    meta=utils.cursos_meta,
)
def courses() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(
                    details=False,
                ),
                courses_links(),
                # footer(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Size.BIG.value,
                padding=styles.Size.BIG.value,
            ),
        ),
        footer(),
    )
