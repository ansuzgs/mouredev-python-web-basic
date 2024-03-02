import reflex as rx
from python_web.components.link_button import link_button
from python_web.components.title import title
import python_web.constants as constants
from python_web.routes import Route


def index_links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            "Cursos gratis",
            "Consulta mis tutoriales para aprender programacion",
            "/icons/code.svg",
            Route.COURSES.value,
            is_external=False,
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
        # rx.cond(
        #     len(featured) > 0,
        #     rx.vstack(
        #         title("Destacado"),
        #         rx.foreach(
        #             featured,
        #             lambda item: rx.responsive_grid(
        #                 rx.link(
        #                     rx.image(src=item["image"]),
        #                     rx.text(item["title"]),
        #                     href=item["url"],
        #                     is_external=True,
        #                 )
        #             ),
        #         ),
        #     ),
        # ),
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
        spacing="5",
    )
