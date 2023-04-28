from .base import *

DEBUG = False

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

SECURE_SSL_REDIRECT = not DEBUG

ALLOWED_HOSTS = [".datahub.go.ug", "localhost", "127.0.0.1", "167.99.87.62", "138.68.164.192"]

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", None)

try:
    from .local import *
except ImportError:
    pass
