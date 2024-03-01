import reflex as rx
from python_web.components.link_button import link_button
from python_web.components.title import title
import python_web.constants as constants


def courses_links() -> rx.Component:
    return rx.vstack(
        title("Cursos gratis"),
        link_button(
            "Retos de programacion",
            "Ruta de estudio semanal para practicar logica de programacion",
            "/icons/code.svg",
            constants.CODE_CHALLENGES_URL,
            is_external=False,
        ),
        link_button(
            "Python desde 0",
            "Curso de +37h: Fundamentos, frondend, backend, testing...",
            "/icons/python.svg",
            constants.PYTHON_COURSE_URL,
            is_external=False,
        ),
        width="100%",
        spacing="5",
    )
