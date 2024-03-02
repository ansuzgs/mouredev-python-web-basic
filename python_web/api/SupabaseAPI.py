import os
import dotenv
from supabase import create_client, Client


class SupabaseAPI:
    dotenv.load_dotenv()
    SUPABASE_URL = os.environ.get("SUPABASE_URL")
    SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

    supabase: Client

    def __init__(self) -> None:
        self.supabase = None

    def generate_client(self):
        if self.supabase is None:
            self.supabase = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)

    def featured(self) -> list:
        if self.supabase is None:
            self.generate_client()
        response = self.supabase.table("featured").select("*").execute()

        featured_data = []

        if len(response.data) > 0:
            for feature_item in response.data:
                featured_data.append(feature_item)

        print(featured_data)

        return featured_data
