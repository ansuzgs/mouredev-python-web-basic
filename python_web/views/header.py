import reflex as rx
from python_web.components.link_icon import link_icon
from python_web.components.info_text import info_text
from python_web.styles.styles import Size as Size, Spacing
from python_web.styles.styles import TextColor as TextColor
from python_web.styles.colors import Color as Color


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(fallback="PGS", size="lg"),
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
