import reflex as rx

import python_web.styles.styles as styles
from python_web.model.Featured import Featured
from python_web.styles.styles import Size, Spacing


def featured_link(featured: Featured) -> rx.Component:
    return rx.link(
        rx.vstack(
            rx.image(
                src=featured.image,
                border_radius=Size.DEFAULT.value,
            ),
            rx.text(
                featured.title,
                size=Spacing.VERY_SMALL.value,
                style=styles.button_body_style,
            ),
            spacing=Spacing.SMALL.value,
            align_items="start",
            class_name=styles.FADEIN_ANIMATION,
        ),
        href=featured.url,
        is_external=True,
    )
