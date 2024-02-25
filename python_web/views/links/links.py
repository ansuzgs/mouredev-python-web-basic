import reflex as rx
from python_web.components.link_button import link_button
from python_web.components.title import title


def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            "Twitch", "Directos de lunes a viernes", "https://www.twitch.tv"
        ),
        link_button(
            "Youtube", "Tutoriales semanales", "https://www.youtube.com"
        ),
        link_button(
            "Instagram", "Fotos nuevas cada semana", "https://www.instagram.com"
        ),
        link_button(
            "LinkedIn", "Curriculum actualizado", "https://www.linkedin.com"
        ),
        title("Comunidad"),
        link_button(
            "Twitch", "Directos de lunes a viernes", "https://www.twitch.tv"
        ),
        link_button(
            "Youtube", "Tutoriales semanales", "https://www.youtube.com"
        ),
        link_button(
            "Instagram", "Fotos nuevas cada semana", "https://www.instagram.com"
        ),
        link_button(
            "LinkedIn", "Curriculum actualizado", "https://www.linkedin.com"
        ),
        title("Comunidad"),
        link_button(
            "Twitch", "Directos de lunes a viernes", "https://www.twitch.tv"
        ),
        link_button(
            "Youtube", "Tutoriales semanales", "https://www.youtube.com"
        ),
        link_button(
            "Instagram", "Fotos nuevas cada semana", "https://www.instagram.com"
        ),
        link_button(
            "LinkedIn", "Curriculum actualizado", "https://www.linkedin.com"
        ),
        width="100%",
        spacing="5",
    )
