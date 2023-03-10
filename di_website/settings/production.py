from .base import *
from decouple import config

DEBUG = False

SECRET_KEY = config('SECRET_KEY',
                    '3bxacdim+p6h*6-j7(zq$t4#4=vzu97+xzeb9-=0rqbh+_o#_d')
ALLOWED_HOSTS = [
    '127.0.0.1', '159.65.56.142', 'localhost', 'devinit.org', 'dev.devinit.org', 'www.dev.devinit.org',
    '165.232.38.245','www.devinit.org', 'staging.devinit.org', 'www.staging.devinit.org'
]

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

SECURE_SSL_REDIRECT = not DEBUG
CSRF_COOKIE_SECURE = not DEBUG
SESSION_COOKIE_SECURE = not DEBUG

try:
    from .local import *
except ImportError:
    pass

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'null': {
            'class': 'logging.NullHandler',
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'di_website.logging.ThrottledAdminEmailHandler'
        },
    },
    'loggers': {
        'django': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
        'django.security.DisallowedHost': {
            'handlers': ['null'],
            'propagate': False,
        },
    },
}
