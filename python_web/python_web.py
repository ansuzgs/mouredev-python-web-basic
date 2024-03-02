import reflex as rx
import python_web.styles.styles as styles
from python_web.pages.index import index
from python_web.pages.courses import courses
from python_web.api.api import repo
from python_web.api.api import live


app = rx.App(stylesheets=styles.STYLESHEETS, style=styles.BASE_STYLE)

app.api.add_api_route("/repo", repo)
app.api.add_api_route("/live/{user}", live)
