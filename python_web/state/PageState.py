import reflex as rx
import python_web.utils as utils
from python_web.api.api import featured, live, schedule
from python_web.model.Live import Live
from python_web.model.Featured import Featured

USER = "mouredev"


class PageState(rx.State):
    """Define your app state"""

    timezone = ""
    live = Live(live=False, title="")
    next_live: str = ""
    featured_info: list[Featured]

    async def check_live(self):
        self.live = await live(USER)

    def check_schedule(self):
        if self.timezone == "":
            return rx.call_script(
                utils.LOCAL_TIMEZONE_SCRIPT,
                PageState.update_timezone,
            )
        else:
            self.update_timezone(self.timezone)

    async def update_timezone(self, timezone: str):
        self.timezone = timezone
        self.next_live = utils.next_date(await schedule(), self.timezone)

    async def featured_links(self):
        self.featured_info = await featured()
