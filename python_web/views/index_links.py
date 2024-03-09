import reflex as rx
from python_web.state.PageState import PageState
from python_web.styles.styles import Size, Spacing
from python_web.styles.colors import Color
from python_web.components.link_button import link_button
from python_web.components.title import title
from python_web.components.featured_link import featured_link
import python_web.constants as constants
from python_web.model.Featured import Featured
from python_web.routes import Route


def index_links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            "Cursos gratis",
            "Consulta mis tutoriales para aprender programacion",
            "/icons/code.svg",
            Route.COURSES.value,
            False,
            Color.SECONDARY.value,
        ),
        link_button(
            "Twitch",
            "Directos de lunes a viernes",
            "/icons/twitch.svg",
            constants.TWITCH_URL,
        ),
        link_button(
            "Youtube",
            "Tutoriales semanales",
            "/icons/youtube.svg",
            constants.YOUTUBE_URL,
        ),
        link_button(
            "Instagram",
            "Fotos nuevas a diario",
            "/icons/instagram.svg",
            constants.INSTAGRAM_URL,
        ),
        link_button(
            "LinkedIn",
            "Curriculum actualizado",
            "/icons/linkedin.svg",
            constants.LINKEDIN_URL,
        ),
        rx.cond(
            PageState.featured_info,
            rx.vstack(
                title("Destacado"),
                rx.flex(
                    rx.foreach(
                        PageState.featured_info,
                        featured_link,
                    ),
                    flex_direction=["column", "row"],
                    spacing=Spacing.DEFAULT.value,
                ),
                spacing=Spacing.DEFAULT.value,
            ),
        ),
        title("Comunidad"),
        link_button(
            "Twitch",
            "Directos de lunes a viernes",
            "/icons/twitch.svg",
            constants.TWITCH_URL,
        ),
        link_button(
            "Youtube",
            "Tutoriales semanales",
            "/icons/youtube.svg",
            constants.YOUTUBE_URL,
        ),
        link_button(
            "Instagram",
            "Fotos nuevas a diario",
            "/icons/instagram.svg",
            constants.INSTAGRAM_URL,
        ),
        link_button(
            "LinkedIn",
            "Curriculum actualizado",
            "/icons/linkedin.svg",
            constants.LINKEDIN_URL,
        ),
        width="100%",
        spacing=Spacing.DEFAULT.value,
        on_mount=PageState.featured_links,
    )
