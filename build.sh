source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
API_URL=https://mouredev-python-web-basic-production.up.railway.app reflex export --frontend-only
rm -rf public
unzip frontend.zip -d public
rm -f frontend.zip
deactivate
