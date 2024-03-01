# Stage 1: init
FROM python:3.11

# Crear un directorio de trabajo
WORKDIR /app

# Copiamos el codigo al directio de trabajo
COPY . .

# Crear entorno virtual
ENV VIRTUAL_ENV=/app/.venv_docker
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN python3.11 -m venv $VIRTUAL_ENV

# Actualizo pip e instalo requisitos
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Ejecutar el backend
CMD reflex run --env prod --backend-only
