import reflex as rx
import python_web.styles.styles as styles
from python_web.pages.index import index
from python_web.pages.courses import courses


class State(rx.State):
    """Define your app state here."""


app = rx.App(stylesheets=styles.STYLESHEETS, style=styles.BASE_STYLE)
