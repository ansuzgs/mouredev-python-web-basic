import reflex as rx
import python_web.constants as constants
from python_web.components.link_icon import link_icon
from python_web.components.link_button import link_button
from python_web.components.info_text import info_text
from python_web.styles.styles import Size as Size, Spacing
from python_web.styles.styles import TextColor as TextColor
from python_web.styles.colors import Color as Color
from python_web.model.Live import Live
from python_web.state.PageState import PageState


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(
                rx.cond(
                    PageState.live.live,
                    rx.link(
                        rx.image(
                            src="/icons/twitch.svg",
                            height=Size.DEFAULT.value,
                            width=Size.DEFAULT.value,
                        ),
                        bg=Color.PURPLE.value,
                        border_color=Color.PURPLE.value,
                        class_name="blink",
                        href=constants.TWITCH_URL,
                        is_external=True,
                        border_radius="50%",
                        padding=Size.SMALL.value,
                        position="absolute",
                        bottom="0",
                        right="0",
                    ),
                ),
                rx.avatar(
                    name="Pablo GS",
                    size=Spacing.MEDIUM_BIG.value,
                    src="/favicon.ico",
                    radius="full",
                    color=TextColor.BODY.value,
                    bg=Color.CONTENT.value,
                    padding="2px",
                    border=f"4px solid {Color.PRIMARY.value}",
                ),
                position="relative",
            ),
            rx.vstack(
                rx.heading(
                    "Pablo GS",
                    size=Spacing.BIG.value,
                ),
                rx.text(
                    "@ansuz_gs",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value,
                ),
                rx.hstack(
                    link_icon(
                        "/icons/github.svg",
                        constants.GITHUB_URL,
                        "GitHub",
                    ),
                    link_icon(
                        "/icons/x.svg",
                        constants.TWITTER_URL,
                        "Twitter/X",
                    ),
                    link_icon(
                        "/icons/instagram.svg",
                        constants.INSTAGRAM_URL,
                        "Instagram",
                    ),
                    link_icon(
                        "/icons/linkedin.svg",
                        constants.LINKEDIN_URL,
                        "Linkedin",
                    ),
                    spacing=Spacing.LARGE.value,
                    padding_top=Size.SMALL.value,
                ),
                spacing=Spacing.ZERO.value,
                align_items="start",
            ),
            align="end",
            spacing=Spacing.DEFAULT.value,
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
            PageState.live.live,
            link_button(
                "En directo",
                PageState.live.title,
                "/icons/twitch.svg",
                constants.TWITCH_URL,
                highlight_color=Color.PURPLE.value,
                animated=True,
            ),
        ),
        rx.box(
            rx.cond(
                PageState.next_live,
                link_button(
                    "Proximo directo",
                    PageState.next_live,
                    "/icons/twitch.svg",
                    constants.TWITCH_URL,
                    highlight_color=Color.PURPLE.value,
                    animated=True,
                ),
            ),
            width="100%",
            on_mount=PageState.check_schedule,
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
        width="100%",
        spacing=Spacing.BIG.value,
        align_items="start",
        on_mount=PageState.check_live,
    )
