import python_web.constants as constants
from python_web.model.Featured import Featured
from python_web.model.Live import Live
from .TwitchAPI import TwitchAPI
from .SupabaseAPI import SupabaseAPI
from .ConfigCatAPI import ConfigCatAPI


TWITCH_API = TwitchAPI()
SUPABASE_API = SupabaseAPI()
CONFIGCAT_API = ConfigCatAPI()


async def repo() -> str:
    return constants.REPO_URL


async def live(user: str) -> Live:
    return TWITCH_API.live(user)


async def featured() -> list[Featured]:
    return SUPABASE_API.featured()


async def schedule() -> dict:
    return CONFIGCAT_API.schedule()
