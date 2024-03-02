import reflex as rx
from python_web.api.api import live
from python_web.api.api import featured

USER = "mouredev"


class PageState(rx.State):
    """Define your app state"""

    is_live: bool
    live_title: str
    featured_info: list

    async def check_live(self):
        live_data = await live(USER)
        self.is_live = live_data["live"]
        self.live_title = live_data["title"]

    async def featured_links(self):
        self.featured_info = await featured()
