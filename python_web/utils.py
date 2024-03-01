import reflex as rx

# Comun


def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


preview = "https://moure.dev/preview"

_meta = [
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@mouredev"},
]

# Index

index_title = "MoureDev | Te enseño programacion y desarrollo de software"
index_description = "Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador."

index_meta = [
    {"name": "og:title", "content": index_title},
    {"name": "og:description", "content": index_description},
]

index_meta.extend(_meta)

# Cursos

cursos_title = "MoureDev | Cursos gratis de programacion"
cursos_description = "Este es un listado con algunos cursos gratis para aprender programacion. Python, SQL, Git..."

cursos_meta = [
    {"name": "og:title", "content": cursos_title},
    {"name": "og:description", "content": cursos_description},
]

cursos_meta.extend(_meta)
