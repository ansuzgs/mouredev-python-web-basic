import reflex as rx
from python_web.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button("Twitch", "https://www.twitch.tv"),
        link_button("Youtube", "https://www.youtube.com"),
        link_button("Instagram", "https://www.instagram.com"),
        link_button("LinkedIn", "https://www.linkedin.com"),
    )
