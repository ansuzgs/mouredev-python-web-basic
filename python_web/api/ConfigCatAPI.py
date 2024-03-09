import configcatclient
import os
import dotenv
import json


class ConfigCatAPI:
    dotenv.load_dotenv()

    CONFIGCAT_SDK_KEY = os.environ.get("CONFIGCAT_SDK_KEY")

    def __init__(self) -> None:
        if self.CONFIGCAT_SDK_KEY is not None:
            self.configcat = configcatclient.get(self.CONFIGCAT_SDK_KEY)

    def schedule(self) -> dict:
        response = self.configcat.get_value("live_schedule", "")

        return json.loads(str(response))
