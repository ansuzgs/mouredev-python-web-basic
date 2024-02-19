import reflex as rx
from  python_web.components.link_button import link_button

def links() -> rx.Component:
    return rx.vstack(
        link_button(),
        link_button(),
        link_button(),
        link_button(),
    )