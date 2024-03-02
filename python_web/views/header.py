import reflex as rx
import python_web.constants as constants
from python_web.components.link_icon import link_icon
from python_web.components.link_button import link_button
from python_web.components.info_text import info_text
from python_web.styles.styles import Size as Size, Spacing
from python_web.styles.styles import TextColor as TextColor
from python_web.styles.colors import Color as Color


def header(details=True, live=False, live_title="") -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                rx.cond(
                    live,
                    rx.link(
                        rx.avatar_badge(
                            rx.image(src="/icons/twitch.svg"),
                            bg=Color.PURPLE.value,
                            border_color=Color.PURPLE.value,
                            class_name="blink",
                        ),
                        href=constants.TWITCH_URL,
                    ),
                ),
                name="Pablo GS",
                fallback="PGS",
                size="xl",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value,
            ),
            rx.vstack(
                rx.heading("Pablo GS", size="md"),
                rx.text(
                    "@ansuz_gs",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value,
                ),
                rx.text(
                    "Software Developer",
                    margin_top=Size.ZERO.value,
                    color=TextColor.BODY.value,
                ),
                rx.hstack(
                    link_icon("https://twitter.com"),
                    link_icon("https://youtube.com"),
                    link_icon("https://google.com"),
                ),
                align_items="left",
            ),
            spacing="5",
        ),
        rx.flex(
            info_text("+2", "Años de experiencia"),
            rx.spacer(),
            info_text("+2", "Años de experiencia"),
            rx.spacer(),
            info_text("+2", "Años de experiencia"),
            width="100%",
        ),
        rx.cond(
            live,
            link_button(
                "En directo", live_title, "/icons/twitch.svg", constants.TWITCH_URL
            ),
        ),
        rx.cond(
            details,
            rx.text(
                """BLABB BBBBBB BBBLASKD RFLBKLSD KGFBLADKGBLSKDL GKBADLkgblkasdkgbklj daslgkjba dlkg jbkladj gklbdajb
                    sdkgjbklsdjgbklsdjgk lbjsdklgjbk lsdjgklbd sjgklbjsdgklbjsdk lgjbsdkljgbk ljsdgk lbsd jklgbjs dklgjbsk
                    sdk gjbklsdj gbklsdj gklbj sdklgjbsd klgjbklsdj gbjkldjk lbjdklgj bdklgjbk lsdj gbk lsdjgk lbsdj gkb jsdk""",
                color=TextColor.BODY.value,
            ),
        ),
        spacing="5",
        align_items="left",
    )
